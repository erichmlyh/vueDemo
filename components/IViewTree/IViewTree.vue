<template>
  <div>
    <Button type="primary" @click="open">显示对话框</Button>
    <Modal
        v-model="modal"
        title="ivew Tree"
        :style="{height: '300px', overflow: 'scroll'}"
        @on-ok="ok"
        @on-cancel="cancel">
          <Tree :data="treeData" show-checkbox></Tree>
    </Modal>
  </div>
</template>

<script>
const leafsNum = 1000;
const childrenLeafsNum = 20;

const treeData = Array.from(Array(leafsNum)).map(() => ({
  title: ("" + Math.random()).split(".")[1],
  children: Array.from(Array(childrenLeafsNum)).map(() => ({
    title: ("" + Math.random()).split(".")[1]
  }))
}));

const otherTreeData = Array.from(Array(leafsNum)).map(() => ({
  title: ("" + Math.random()).split(".")[1],
  children: Array.from(Array(childrenLeafsNum)).map(() => ({
    title: ("" + Math.random()).split(".")[1]
  }))
}));

export default {
  name: "IViewTree",
  data() {
    return {
      modal: false,
      treeData,
    }
  },
  props:{
    test: {
      type: Boolean,
      default: undefined
    }
  },
  mounted() {
    console.log('------')
    console.log(this.test)
  },
  methods: {
    open() {
      this.modal = true
      this.treeData = treeData
    },
    ok() {
      this.modal = false
      this.treeData = []
    },
    cancel() {
      this.modal = false
      this.treeData = []
    }
  },
};
</script>
