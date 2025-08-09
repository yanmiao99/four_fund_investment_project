<template>
  <div class="fund-list-container">
    <div class="header">
      <h1>我的股票列表</h1>
      <a-button
        type="primary"
        @click="showAddModal = true">
        <template #icon>
          <font-awesome-icon icon="plus" />
        </template>
        添加新股票
      </a-button>
    </div>

    <a-table
      :columns="columns"
      :data="fundList"
      :pagination="false"
      row-key="id"
      class="fund-table">
      <template #operations="{ record }">
        <a-button
          type="text"
          size="small"
          @click="viewDetail(record)">
          <font-awesome-icon icon="eye" /> 查看
        </a-button>
        <a-button
          type="text"
          size="small"
          status="danger"
          @click="deleteFund(record)">
          <font-awesome-icon icon="trash" /> 删除
        </a-button>
      </template>

      <template #priceChange="{ record }">
        <span :class="getPriceChangeClass(record.priceChange)">
          <font-awesome-icon
            :icon="record.priceChange >= 0 ? 'arrow-up' : 'arrow-down'" />
          {{ record.priceChange >= 0 ? '+' : ''
          }}{{ record.priceChange.toFixed(2) }}%
        </span>
      </template>
    </a-table>

    <!-- 添加股票弹窗 -->
    <a-modal
      v-model:visible="showAddModal"
      title="添加新股票"
      @ok="addFund"
      @cancel="resetForm">
      <a-form
        :model="form"
        layout="vertical">
        <a-form-item
          label="股票代码"
          required>
          <a-input
            v-model="form.code"
            placeholder="例如: 600000"
            :max-length="6" />
        </a-form-item>

        <a-form-item
          label="股票名称"
          required>
          <a-input
            v-model="form.name"
            placeholder="例如: 浦发银行" />
        </a-form-item>

        <a-form-item
          label="总投资金额 (元)"
          required>
          <a-input-number
            v-model="form.totalAmount"
            placeholder="例如: 10000"
            :min="1000"
            :step="1000"
            style="width: 100%" />
        </a-form-item>

        <a-form-item
          label="初始买入价格 (元)"
          required>
          <a-input-number
            v-model="form.initialPrice"
            placeholder="例如: 10.56"
            :precision="2"
            :min="0.01"
            style="width: 100%" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
/**
 * 基金列表页面 - Vue 3 Composition API
 * 功能包括：基金列表展示、添加新基金、删除基金、跳转详情页
 */
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

// 路由实例，用于页面跳转
const router = useRouter();

/**
 * 响应式数据定义
 */
// 控制添加基金模态框的显示状态
const showAddModal = ref(false);

// 基金列表数据
const fundList = ref([]);

/**
 * 添加基金表单数据
 * 包含新基金的基本信息
 */
const form = reactive({
  code: '', // 股票代码
  name: '', // 股票名称
  totalAmount: null, // 总投资金额
  initialPrice: null, // 初始价格
});

/**
 * 表格列配置
 * 定义基金列表表格的列结构和显示格式
 */
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 80,
    render: ({ rowIndex }) => rowIndex + 1, // 显示行号（从1开始）
  },
  {
    title: '股票代码',
    dataIndex: 'code',
    width: 120, // 直接显示股票代码
  },
  {
    title: '股票名称',
    dataIndex: 'name',
    width: 150, // 直接显示股票名称
  },
  {
    title: '初始价格',
    dataIndex: 'initialPrice',
    width: 120,
    render: ({ record }) => `¥${record.initialPrice.toFixed(2)}`, // 格式化价格显示
  },
  {
    title: '当前价格',
    dataIndex: 'currentPrice',
    width: 120,
    render: ({ record }) => `¥${record.currentPrice.toFixed(2)}`, // 格式化价格显示
  },
  {
    title: '累计涨跌幅',
    dataIndex: 'priceChange',
    width: 120,
    slotName: 'priceChange', // 使用插槽自定义显示（包含颜色和图标）
  },
  {
    title: '操作',
    slotName: 'operations', // 使用插槽显示操作按钮
    width: 150,
  },
];

/**
 * 核心业务方法
 */

/**
 * 加载基金列表
 * 从localStorage读取已保存的基金数据
 */
const loadFundList = () => {
  const stored = localStorage.getItem('fundList');
  if (stored) {
    // 解析JSON数据并赋值给响应式变量
    fundList.value = JSON.parse(stored);
  }
};

/**
 * 保存基金列表
 * 将当前基金列表数据保存到localStorage
 */
const saveFundList = () => {
  localStorage.setItem('fundList', JSON.stringify(fundList.value));
};

/**
 * 添加新基金
 * 验证表单数据，创建新的基金记录并保存
 */
const addFund = () => {
  // 表单数据完整性验证
  if (!form.code || !form.name || !form.totalAmount || !form.initialPrice) {
    Message.error('请填写完整信息');
    return;
  }

  // 检查股票代码唯一性
  if (fundList.value.some((fund) => fund.code === form.code)) {
    Message.error('该股票代码已存在');
    return;
  }

  // 创建新的基金记录对象
  const newFund = {
    id: Date.now(), // 使用时间戳作为唯一ID
    code: form.code, // 股票代码
    name: form.name, // 股票名称
    totalAmount: form.totalAmount, // 总投资金额
    initialPrice: form.initialPrice, // 初始买入价格
    currentPrice: form.initialPrice, // 当前价格（初始等于买入价格）
    priceChange: 0, // 累计涨跌幅（初始为0）
    portions: 10, // 总份数（固定10份）
    usedPortions: 1, // 已买入份数（初始建仓1份）
    portionAmount: form.totalAmount / 10, // 每份金额（总金额÷10）
    lastBuyPrice: form.initialPrice, // 最后买入价格
    createTime: new Date().toISOString(), // 创建时间
  };

  // 添加到列表并保存
  fundList.value.push(newFund);
  saveFundList();

  // 显示成功消息并关闭模态框
  Message.success('添加成功');
  showAddModal.value = false;
  resetForm();
};

/**
 * 重置表单数据
 * 清空所有表单字段，恢复初始状态
 */
const resetForm = () => {
  form.code = '';
  form.name = '';
  form.totalAmount = null;
  form.initialPrice = null;
};

/**
 * 删除基金
 * 根据记录ID从列表中移除对应的基金数据
 * @param {Object} record - 要删除的基金记录
 */
const deleteFund = (record) => {
  // 查找要删除的记录在数组中的索引
  const index = fundList.value.findIndex((fund) => fund.id === record.id);
  if (index > -1) {
    // 从数组中移除该记录
    fundList.value.splice(index, 1);
    // 保存更新后的列表
    saveFundList();
    Message.success('删除成功');
  }
};

/**
 * 查看基金详情
 * 跳转到基金详情页面，传递基金ID作为查询参数
 * @param {Object} record - 要查看的基金记录
 */
const viewDetail = (record) => {
  // 使用路由导航跳转到详情页
  router.push({
    path: '/fundDetail',
    query: { id: record.id }, // 通过query参数传递基金ID
  });
};

/**
 * 获取价格变化的CSS类名
 * 根据涨跌幅返回对应的样式类，用于颜色区分
 * @param {number} priceChange - 价格变化百分比
 * @returns {string} CSS类名
 */
const getPriceChangeClass = (priceChange) => {
  if (priceChange > 0) return 'price-up'; // 上涨：红色
  if (priceChange < 0) return 'price-down'; // 下跌：绿色
  return 'price-neutral'; // 无变化：灰色
};

/**
 * 组件生命周期 - 挂载完成
 * 页面加载完成后自动加载基金列表数据
 */
onMounted(() => {
  loadFundList();
});
</script>

<style lang="less" scoped>
// 引入全局变量文件
@import '@/styles/variables.less';

/**
 * 基金列表页面样式
 * 包含股票列表展示、添加股票模态框、涨跌幅颜色区分等功能
 */

/**
 * 主容器样式
 * 设置页面整体布局和背景
 */
.fund-list-container {
  padding: @spacing-lg;
  max-width: 1200px;
  margin: 0 auto;
}

/**
 * 页面头部样式
 * 包含标题和添加按钮的布局
 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: @spacing-lg;

  h1 {
    margin: 0;
    color: @text-color;
    font-size: 24px;
    font-weight: 600;
  }
}

/**
 * 表格容器样式
 * 设置表格的背景、圆角和阴影效果
 */
.fund-table {
  background: @bg-color;
  border-radius: @border-radius;
  box-shadow: @box-shadow-light;
}

/**
 * 涨跌幅颜色样式
 * 根据涨跌情况显示不同颜色，增强数据可读性
 */
.price-up {
  color: @danger-color; // 上涨显示红色（符合中国股市习惯）
  font-weight: 600;

  // 上涨箭头图标样式
  :deep(.fa-arrow-up) {
    font-size: @icon-size-small;
    margin-right: @spacing-xs;
  }
}

.price-down {
  color: @success-color; // 下跌显示绿色（符合中国股市习惯）
  font-weight: 600;

  // 下跌箭头图标样式
  :deep(.fa-arrow-down) {
    font-size: @icon-size-small;
    margin-right: @spacing-xs;
  }
}

.price-neutral {
  color: @text-color-secondary; // 无变化显示灰色
  font-weight: 600;
}

/**
 * 按钮图标样式规范
 * 统一按钮内图标的大小和间距
 */
:deep(.arco-btn) {
  .fa-eye,
  .fa-trash,
  .fa-plus {
    font-size: @icon-size-small;
    margin-right: @spacing-xs;
  }
}

/**
 * 表格样式定制
 * 使用深度选择器覆盖 Arco Design 表格的默认样式
 */
:deep(.arco-table-th) {
  background-color: @bg-color-secondary;
  font-weight: 600;
}

:deep(.arco-table-td) {
  border-bottom: 1px solid @border-color;
}

:deep(.arco-table-tbody .arco-table-tr:hover .arco-table-td) {
  background-color: @bg-color-hover;
}
</style>
