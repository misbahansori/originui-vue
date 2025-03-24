<template>
  <div class="*:not-first:mt-2">
    <Label>Input with start select</Label>
    <div class="flex rounded-md shadow-xs">
      <SelectNative
        class="text-muted-foreground hover:text-foreground w-fit rounded-e-none shadow-none"
      >
        <option value="https://">https://</option>
        <option value="http://">http://</option>
        <option value="ftp://">ftp://</option>
        <option value="sftp://">sftp://</option>
        <option value="ws://">ws://</option>
        <option value="wss://">wss://</option>
      </SelectNative>
      <Input
        class="-ms-px rounded-s-none shadow-none focus-visible:z-10"
        placeholder="192.168.1.1"
        type="text"
      />
    </div>
  </div>
</template>
