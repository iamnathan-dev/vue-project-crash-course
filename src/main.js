import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import router from "./router";
import Navbar from "./shared/components/ui/Navbar.vue";
import Logo from "./shared/atoms/Logo.vue";

const app = createApp(App);

// Register components globally
app.component("Navbar", Navbar);
app.component("Logo", Logo);

app.use(router);
app.mount("#app");
