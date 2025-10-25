export default {
     setTitle(title) {
        this.pageTitle = title;
      },
      getTitle() {
        return this.pageTitle || "Friendly World"
      }
      // TODO - Change dynamic title
}