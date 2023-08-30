<template>
  <div class="center">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm form"
      :size="formSize"
      status-icon
      label-position="top"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username" name="username" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="ruleForm.password" type="password" name="password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Submit
        </el-button>

        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { chemistryService } from "../services/chemistry";

interface RuleForm {
  username: string;
  password: string;
}

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  username: "",
  password: "",
});

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: "Please input Username", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input Password", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      chemistryService
        .login({
          username: ruleForm.username,
          password: ruleForm.password,
        })
        .then((res) => {
          console.log(res);
          // localStorage.setItem('refresh', res.data.refresh)
          // localStorage.setItem('access', res.data.access)
        })
        .catch((error) => console.log(error));
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<style lang="scss" scoped>
.center {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 250px;
  margin-bottom: 100px;
}
</style>
