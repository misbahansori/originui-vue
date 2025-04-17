import { ref, watch, type Ref } from "vue";

export type FileMetadata = {
  name: string;
  size: number;
  type: string;
  url: string;
  id: string;
};

export type FileWithPreview = {
  file: File | FileMetadata;
  id: string;
  preview?: string;
};

export type FileUploadOptions = {
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
  initialFiles?: FileMetadata[];
  onFilesChange?: (files: FileWithPreview[]) => void;
  onFilesAdded?: (files: FileWithPreview[]) => void;
};

export type FileUploadState = {
  files: FileWithPreview[];
  isDragging: boolean;
  errors: string[];
};

export type FileUploadActions = {
  addFiles: (files: FileList | File[]) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
  clearErrors: () => void;
  handleDragEnter: (e: DragEvent) => void;
  handleDragLeave: (e: DragEvent) => void;
  handleDragOver: (e: DragEvent) => void;
  handleDrop: (e: DragEvent) => void;
  handleFileChange: (e: Event) => void;
  openFileDialog: () => void;
  getInputProps: (props?: { disabled?: boolean }) => {
    type: string;
    class: string;
    onChange: (e: Event) => void;
    accept: string;
    multiple: boolean;
    disabled?: boolean;
    ref: Ref<HTMLInputElement | null>;
  };
};

export const useFileUpload = (options: FileUploadOptions = {}) => {
  const {
    maxFiles = Infinity,
    maxSize = Infinity,
    accept = "*",
    multiple = false,
    initialFiles = [],
    onFilesChange,
    onFilesAdded,
  } = options;

  const files = ref<FileWithPreview[]>(
    initialFiles.map((file) => ({
      file,
      id: file.id,
      preview: file.url,
    })),
  );
  const isDragging = ref(false);
  const errors = ref<string[]>([]);

  const inputRef = ref<HTMLInputElement | null>(null);

  const validateFile = (file: File | FileMetadata): string | null => {
    if (file instanceof File) {
      if (file.size > maxSize) {
        return `File "${file.name}" exceeds the maximum size of ${formatBytes(maxSize)}.`;
      }
    } else {
      if (file.size > maxSize) {
        return `File "${file.name}" exceeds the maximum size of ${formatBytes(maxSize)}.`;
      }
    }

    if (accept !== "*") {
      const acceptedTypes = accept.split(",").map((type) => type.trim());
      const fileType = file instanceof File ? file.type || "" : file.type;
      const fileExtension = `.${file instanceof File ? file.name.split(".").pop() : file.name.split(".").pop()}`;

      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith(".")) {
          return fileExtension.toLowerCase() === type.toLowerCase();
        }
        if (type.endsWith("/*")) {
          const baseType = type.split("/")[0];
          return fileType.startsWith(`${baseType}/`);
        }
        return fileType === type;
      });

      if (!isAccepted) {
        return `File "${file instanceof File ? file.name : file.name}" is not an accepted file type.`;
      }
    }

    return null;
  };

  const createPreview = (file: File | FileMetadata): string | undefined => {
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return file.url;
  };

  const generateUniqueId = (file: File | FileMetadata): string => {
    if (file instanceof File) {
      return `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    }
    return file.id;
  };

  const clearFiles = () => {
    // Clean up object URLs
    files.value.forEach((file) => {
      if (
        file.preview &&
        file.file instanceof File &&
        file.file.type.startsWith("image/")
      ) {
        URL.revokeObjectURL(file.preview);
      }
    });

    if (inputRef.value) {
      inputRef.value.value = "";
    }

    files.value = [];
    errors.value = [];
    onFilesChange?.(files.value);
  };

  const addFiles = (newFiles: FileList | File[]) => {
    if (!newFiles || newFiles.length === 0) return;

    const newFilesArray = Array.from(newFiles);
    const newErrors: string[] = [];

    // Clear existing errors when new files are uploaded
    errors.value = [];

    // In single file mode, clear existing files first
    if (!multiple) {
      clearFiles();
    }

    // Check if adding these files would exceed maxFiles (only in multiple mode)
    if (
      multiple &&
      maxFiles !== Infinity &&
      files.value.length + newFilesArray.length > maxFiles
    ) {
      newErrors.push(`You can only upload a maximum of ${maxFiles} files.`);
      errors.value = newErrors;
      return;
    }

    const validFiles: FileWithPreview[] = [];

    newFilesArray.forEach((file) => {
      // Check for duplicates
      const isDuplicate = files.value.some(
        (existingFile) =>
          existingFile.file.name === file.name &&
          existingFile.file.size === file.size,
      );

      // Skip duplicate files silently
      if (isDuplicate) {
        return;
      }

      // Check file size
      if (file.size > maxSize) {
        newErrors.push(
          multiple
            ? `Some files exceed the maximum size of ${formatBytes(maxSize)}.`
            : `File exceeds the maximum size of ${formatBytes(maxSize)}.`,
        );
        return;
      }

      const error = validateFile(file);
      if (error) {
        newErrors.push(error);
      } else {
        validFiles.push({
          file,
          id: generateUniqueId(file),
          preview: createPreview(file),
        });
      }
    });

    // Only update state if we have valid files to add
    if (validFiles.length > 0) {
      files.value = !multiple ? validFiles : [...files.value, ...validFiles];
      errors.value = newErrors;
      onFilesChange?.(files.value);
      onFilesAdded?.(validFiles);
    } else if (newErrors.length > 0) {
      errors.value = newErrors;
    }

    // Reset input value after handling files
    if (inputRef.value) {
      inputRef.value.value = "";
    }
  };

  const removeFile = (id: string | undefined) => {
    if (!id) return;

    const fileToRemove = files.value.find((file) => file.id === id);
    if (
      fileToRemove &&
      fileToRemove.preview &&
      fileToRemove.file instanceof File &&
      fileToRemove.file.type.startsWith("image/")
    ) {
      URL.revokeObjectURL(fileToRemove.preview);
    }

    files.value = files.value.filter((file) => file.id !== id);
    errors.value = [];
    onFilesChange?.(files.value);
  };

  const clearErrors = () => {
    errors.value = [];
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.value = true;
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      e.currentTarget &&
      e.relatedTarget &&
      (e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)
    ) {
      return;
    }

    isDragging.value = false;
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.value = false;

    // Don't process files if the input is disabled
    if (inputRef.value?.disabled) {
      return;
    }

    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      // In single file mode, only use the first file
      if (!multiple) {
        const file = e.dataTransfer.files[0];
        if (file) {
          addFiles([file]);
        }
      } else {
        addFiles(e.dataTransfer.files);
      }
    }
  };

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      addFiles(target.files);
    }
  };

  const openFileDialog = () => {
    if (inputRef.value) {
      inputRef.value.click();
    }
  };

  const getInputProps = (props: { disabled?: boolean } = {}) => {
    return {
      type: "file",
      class: "sr-only",
      onChange: handleFileChange,
      accept,
      multiple,
      disabled: props.disabled,
      ref: inputRef,
    };
  };

  // Watch for changes in files and call onFilesChange if provided
  watch(
    files,
    (newFiles) => {
      onFilesChange?.(newFiles);
    },
    { deep: true },
  );

  return {
    files,
    isDragging,
    errors,
    addFiles,
    removeFile,
    clearFiles,
    clearErrors,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange,
    openFileDialog,
    getInputProps,
    onFilesAdded,
  };
};

// Helper function to format bytes to human-readable format
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  );
};
