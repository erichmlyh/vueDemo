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
import HoC from "./components/HoC";
import TestOn from "./components/TestOn";
import DepTime from "./components/DepTime";
import IviewTabs from "./components/IviewTabs";
import RxjsDemo from "./components/RxjsDemo";
import VuexDemo from "./components/VuexDemo";
import Direction from "./components/Direction";

export default {
  name: "App",
  functional: true,
  abstract: true,
  render(h) {
    return h(Direction);
  }
};
</script>
