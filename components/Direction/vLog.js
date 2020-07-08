let sendlog = (str) => {
  str = str.replace(/'/g, "");
  console.log(str);
  str && window.opntj && opntj.send && opntj.send(str);
};
let vLog = {};
let handler = null;

vLog.install = function (Vue) {
  Vue.directive("log", {
    bind(el, binding) {
      if (!handler) {
        handler = () => {
          sendlog(el.dataset.log || binding.value || binding.expression);
        };
      }
      el.addEventListener("click", handler, false);
    },
    update(el, binding) {
      el.dataset.log = binding.value;
    },
    unbind(el) {
        console.log('摧毁实例')
      el.removeEventListener("click", handler);
    },
  });
};

export default vLog;
