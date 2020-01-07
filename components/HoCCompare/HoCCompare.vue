<!--
 * @Description: component和reander方式对比
 * @Author: 李洋华
 * @Date: 2019-11-28 11: 22
 -->

<template>
  <div class="HoCCompare">
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <HoCDialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </HoCDialog>
  </div>
</template>

<script>
import { Dialog } from "element-ui";
import HoCRender from './HoCRender.js';
import HoCComponent from './HoCComponent.js';

export default {
  name: "HoCCompare",
  data() {
    return {
      dialogVisible: false
    };
  },
  props: {},
  components: {
    HoCDialog: HoCRender(Dialog)
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
