<script>
import RxjsWatch from "./components/RxjsWatch";
import HoCCompare from "./components/HoCCompare";
import SlotTest from "./components/SlotTest";
import PanoDemo from "./components/PanoDemo";
import LifeCircle from "./components/LifeCircle";
import VnodeInTemplate from "./components/VnodeInTemplate";
import AsyncComponent from "./components/AsyncComponent";
import ModalRouter from "./components/ModalRouter";
import SlotOrder from "./components/SlotOrder";

export default {
  name: "App",
  functional: true,
  abstract: true,
  render(h) {
    return h(SlotOrder);
  }
};
</script>
