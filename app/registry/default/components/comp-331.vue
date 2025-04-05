<script setup lang="ts">
import { useObjectUrl } from "@vueuse/core";

const id = useId();
const maxLength = 180;
const bio = ref(
  "Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!",
);
const characterCount = computed(() => bio.value.length);

// Cover upload functionality
const coverInputRef = useTemplateRef("coverInputRef");
const coverFile = ref<File | null>(null);
const coverPreviewUrl = useObjectUrl(coverFile);
const hideDefault = ref(false);

const handleCoverChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  coverFile.value = target.files?.[0] || null;
};

const handleRemove = () => {
  coverFile.value = null;
  hideDefault.value = true;
  if (coverInputRef.value) {
    coverInputRef.value.value = "";
  }
};

// Avatar upload functionality
const avatarFileInputRef = useTemplateRef("avatarFileInputRef");
const avatarFile = ref<File | null>(null);
const avatarPreviewUrl = useObjectUrl(avatarFile);

const handleAvatarFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  avatarFile.value = target.files?.[0] || null;
};

const handleAvatarThumbnailClick = () => {
  avatarFileInputRef.value?.click();
};
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit profile</Button>
    </DialogTrigger>
    <DialogContent
      class="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5"
    >
      <DialogHeader class="contents space-y-0 text-left">
        <DialogTitle class="border-b px-6 py-4 text-base">
          Edit profile
        </DialogTitle>
      </DialogHeader>
      <DialogDescription class="sr-only">
        Make changes to your profile here. You can change your photo and set a
        username.
      </DialogDescription>
      <div class="overflow-y-auto">
        <!-- Profile Background -->
        <div class="h-32">
          <div
            class="bg-muted relative flex h-full w-full items-center justify-center overflow-hidden"
          >
            <img
              v-if="coverPreviewUrl || (!hideDefault && '/profile-bg.jpg')"
              class="h-full w-full object-cover"
              :src="coverPreviewUrl || '/profile-bg.jpg'"
              :alt="
                coverPreviewUrl
                  ? 'Preview of uploaded image'
                  : 'Default profile background'
              "
              width="512"
              height="96"
            />
            <div
              class="absolute inset-0 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                class="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                @click="() => coverInputRef?.click()"
                :aria-label="
                  coverPreviewUrl || !hideDefault
                    ? 'Change image'
                    : 'Upload image'
                "
              >
                <Icon
                  name="lucide:image-plus"
                  class="size-4"
                  aria-hidden="true"
                />
              </button>
              <button
                v-if="coverPreviewUrl || !hideDefault"
                type="button"
                class="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                @click="handleRemove"
                aria-label="Remove image"
              >
                <Icon name="lucide:x" class="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <input
            type="file"
            ref="coverInputRef"
            @change="handleCoverChange"
            class="hidden"
            accept="image/*"
            aria-label="Upload image file"
          />
        </div>

        <!-- Avatar -->
        <div class="-mt-10 px-6">
          <div
            class="border-background bg-muted relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 shadow-xs shadow-black/10"
          >
            <img
              v-if="avatarPreviewUrl || '/avatar-72-01.jpg'"
              :src="avatarPreviewUrl || '/avatar-72-01.jpg'"
              class="h-full w-full object-cover"
              width="80"
              height="80"
              alt="Profile image"
            />
            <button
              type="button"
              class="focus-visible:border-ring focus-visible:ring-ring/50 absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              @click="handleAvatarThumbnailClick"
              aria-label="Change profile picture"
            >
              <Icon
                name="lucide:image-plus"
                class="size-4"
                aria-hidden="true"
              />
            </button>
            <input
              type="file"
              ref="avatarFileInputRef"
              @change="handleAvatarFileChange"
              class="hidden"
              accept="image/*"
              aria-label="Upload profile picture"
            />
          </div>
        </div>

        <div class="px-6 pt-4 pb-6">
          <form class="space-y-4">
            <div class="flex flex-col gap-4 sm:flex-row">
              <div class="flex-1 space-y-2">
                <Label :htmlFor="`${id}-first-name`">First name</Label>
                <Input
                  :id="`${id}-first-name`"
                  placeholder="Matt"
                  defaultValue="Margaret"
                  type="text"
                  required
                />
              </div>
              <div class="flex-1 space-y-2">
                <Label :htmlFor="`${id}-last-name`">Last name</Label>
                <Input
                  :id="`${id}-last-name`"
                  placeholder="Welsh"
                  defaultValue="Villard"
                  type="text"
                  required
                />
              </div>
            </div>
            <div class="*:not-first:mt-2">
              <Label :htmlFor="`${id}-username`">Username</Label>
              <div class="relative">
                <Input
                  :id="`${id}-username`"
                  class="peer pe-9"
                  placeholder="Username"
                  defaultValue="margaret-villard-69"
                  type="text"
                  required
                />
                <div
                  class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50"
                >
                  <Icon
                    name="lucide:check"
                    class="size-4 text-emerald-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div class="*:not-first:mt-2">
              <Label :htmlFor="`${id}-website`">Website</Label>
              <div class="flex rounded-md shadow-xs">
                <span
                  class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm"
                >
                  https://
                </span>
                <Input
                  :id="`${id}-website`"
                  class="-ms-px rounded-s-none shadow-none"
                  placeholder="yourwebsite.com"
                  defaultValue="www.margaret.com"
                  type="text"
                />
              </div>
            </div>
            <div class="*:not-first:mt-2">
              <Label :htmlFor="`${id}-bio`">Biography</Label>
              <Textarea
                :id="`${id}-bio`"
                placeholder="Write a few sentences about yourself"
                v-model="bio"
                :maxLength="maxLength"
                :aria-describedby="`${id}-description`"
              />
              <p
                :id="`${id}-description`"
                class="text-muted-foreground mt-2 text-right text-xs"
                role="status"
                aria-live="polite"
              >
                <span class="tabular-nums">
                  {{ maxLength - characterCount }}
                </span>
                characters left
              </p>
            </div>
          </form>
        </div>
      </div>
      <DialogFooter class="border-t px-6 py-4">
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button type="button">Save changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
