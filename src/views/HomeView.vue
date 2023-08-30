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
      <el-form-item label="l9_proteinurgiya_gl" prop="l9_proteinurgiya_gl">
        <el-input v-model="ruleForm.l9_proteinurgiya_gl" />
      </el-form-item>

      <el-form-item
        label="l10_koptokchalar_filtratsiyasi"
        prop="l10_koptokchalar_filtratsiyasi"
      >
        <el-input v-model="ruleForm.l10_koptokchalar_filtratsiyasi" />
      </el-form-item>

      <el-form-item label="l11_reabsorbsiya" prop="l11_reabsorbsiya">
        <el-input v-model="ruleForm.l11_reabsorbsiya" />
      </el-form-item>

      <el-form-item label="l12_umumiy_oqsil" prop="l12_umumiy_oqsil">
        <el-input v-model="ruleForm.l12_umumiy_oqsil" />
      </el-form-item>

      <el-form-item label="l13_kreatanin" prop="l13_kreatanin">
        <el-input v-model="ruleForm.l13_kreatanin" />
      </el-form-item>

      <el-form-item label="l14_proteinurgiya_gc" prop="l14_proteinurgiya_gc">
        <el-input v-model="ruleForm.l14_proteinurgiya_gc" />
      </el-form-item>

      <el-form-item label="l15_eritrotsit" prop="l15_eritrotsit">
        <el-input v-model="ruleForm.l15_eritrotsit" />
      </el-form-item>

      <el-form-item label="l16_leykotsit" prop="l16_leykotsit">
        <el-input v-model="ruleForm.l16_leykotsit" />
      </el-form-item>

      <el-form-item label="l17_gialinli" prop="l17_gialinli">
        <el-input v-model="ruleForm.l17_gialinli" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import axios from "axios";

interface RuleForm {
  l9_proteinurgiya_gl: string;
  l10_koptokchalar_filtratsiyasi: string;
  l11_reabsorbsiya: string;
  l12_umumiy_oqsil: string;
  l13_kreatanin: string;
  l14_proteinurgiya_gc: string;
  l15_eritrotsit: string;
  l16_leykotsit: string;
  l17_gialinli: string;
}

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  l9_proteinurgiya_gl: "",
  l10_koptokchalar_filtratsiyasi: "",
  l11_reabsorbsiya: "",
  l12_umumiy_oqsil: "",
  l13_kreatanin: "",
  l14_proteinurgiya_gc: "",
  l15_eritrotsit: "",
  l16_leykotsit: "",
  l17_gialinli: "",
});

const rules = reactive<FormRules<RuleForm>>({
  l9_proteinurgiya_gl: [
    {
      required: true,
      message: "Please input l9_proteinurgiya_gl",
      trigger: "blur",
    },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l10_koptokchalar_filtratsiyasi: [
    {
      required: true,
      message: "Please input l10_koptokchalar_filtratsiyasi",
      trigger: "blur",
    },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l11_reabsorbsiya: [
    {
      required: true,
      message: "Please input l11_reabsorbsiya",
      trigger: "blur",
    },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l12_umumiy_oqsil: [
    {
      required: true,
      message: "Please input l12_umumiy_oqsil",
      trigger: "blur",
    },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l13_kreatanin: [
    { required: true, message: "Please input l13_kreatanin", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l14_proteinurgiya_gc: [
    {
      required: true,
      message: "Please input l14_proteinurgiya_gc",
      trigger: "blur",
    },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l15_eritrotsit: [
    { required: true, message: "Please input l15_eritrotsit", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l16_leykotsit: [
    { required: true, message: "Please input l16_leykotsit", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  l17_gialinli: [
    { required: true, message: "Please input l17_gialinli", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios
        .post("http://52.55.41.251/app1", {
          l9_proteinurgiya_gl: ruleForm.l9_proteinurgiya_gl,
          l10_koptokchalar_filtratsiyasi:
            ruleForm.l10_koptokchalar_filtratsiyasi,
          l11_reabsorbsiya: ruleForm.l11_reabsorbsiya,
          l12_umumiy_oqsil: ruleForm.l12_umumiy_oqsil,
          l13_kreatanin: ruleForm.l13_kreatanin,
          l14_proteinurgiya_gc: ruleForm.l14_proteinurgiya_gc,
          l15_eritrotsit: ruleForm.l15_eritrotsit,
          l16_leykotsit: ruleForm.l16_leykotsit,
          l17_gialinli: ruleForm.l17_gialinli,
        })
        .then((res) => {
          console.log("res");
          // localStorage.setItem('token', res.data.token)
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
  min-height: 100vh;
  padding-top: 50px;
  display: flex;
  justify-content: center;
}

.form {
  width: 250px;
  margin-bottom: 100px;
}
</style>