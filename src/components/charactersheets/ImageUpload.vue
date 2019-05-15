<template>
  <v-content>
    <v-container fluid>
      <form @submit.prevent="handleSubmit">
        <v-flex
          xs12
          class="text-xs-center text-sm-center text-md-center text-lg-center"
        >
          <img :src="imageUrl" height="150" v-if="imageUrl" />
          <v-text-field
            label="Select Image"
            @click="pickFile"
            v-model="imageName"
            prepend-icon="attach_file"
          ></v-text-field>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          />
        </v-flex>
        <div class="buttons pa-1">
          <input type="submit" value="Upload Image" />
        </div>
      </form>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: "Image Upload",
      dialog: false,
      imageName: "",
      imageUrl: "",
      imageFile: "",
      id: this.$route.params.id,
      file: ""
    };
  },
  computed: {
    ...mapGetters(["getKey"])
  },

  methods: {
    ...mapActions(["updateCharacter"]),

    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      this.file = files;
      console.log(files);
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    handleSubmit() {
      const info = {
        key: this.getKey.key,
        id: this.id,
        data: {
          image: this.file[0]
        }
      };
      console.log(info);
      this.updateCharacter(info);
    }
  }
};
</script>
