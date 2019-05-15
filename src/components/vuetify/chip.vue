<template>
  <v-chip :color="color" :text-color="textColor">
    <v-avatar :class="avatarClassColor">{{ avatar }}</v-avatar>
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  props: ["color", "textColor", "avatar", "avatarClassColor", "text"]
};
</script>
