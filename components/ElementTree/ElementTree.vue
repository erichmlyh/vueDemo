<template>
  <div>
    <Button
      type="primary"
      @click="open"
    >显示对话框</Button>
    <Modal
      v-model="modal"
      title="Element Tree"
      :style="{height: '300px', overflow: 'scroll'}"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <el-tree
        :data="treeData"
        show-checkbox
      >
      </el-tree>
    </Modal>
  </div>
</template>

<script>
const leafsNum = 1000;
const childrenLeafsNum = 10;

const treeData = Array.from(Array(leafsNum)).map(() => ({
  id: ("" + Math.random()).split(".")[1],
  label: ("" + Math.random()).split(".")[1],
  children: Array.from(Array(childrenLeafsNum)).map(() => ({
    id: ("" + Math.random()).split(".")[1],
    label: ("" + Math.random()).split(".")[1]
  }))
}));

const otherTreeData = Array.from(Array(leafsNum)).map(() => ({
  id: ("" + Math.random()).split(".")[1],
  label: ("" + Math.random()).split(".")[1],
  children: Array.from(Array(childrenLeafsNum)).map(() => ({
    id: ("" + Math.random()).split(".")[1],
    label: ("" + Math.random()).split(".")[1]
  }))
}));

export default {
  name: "ElementTree",
  data() {
    return {
      modal: false,
      treeData
    };
  },
  methods: {
    open() {
      this.modal = true;
      this.treeData = treeData;
    },
    ok() {
      this.modal = false;
      this.treeData = [];
    },
    cancel() {
      this.modal = false;
      this.treeData = [];
    }
  }
};
</script>
