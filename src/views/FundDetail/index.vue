<template>
  <div class="fund-detail-container">
    <div class="header">
      <a-button
        type="text"
        @click="goBack">
        <template #icon>
          <font-awesome-icon icon="arrow-left" />
        </template>
        返回列表
      </a-button>
      <h1 class="fund-name">
        {{ fundInfo.name }} (<a
          :href="`https://xueqiu.com/S/SH${fundInfo.code}`"
          target="_blank"
          class="stock-code-link"
          >{{ fundInfo.code }} <font-awesome-icon icon="external-link-alt" /></a
        >)
      </h1>
    </div>

    <div class="content">
      <!-- 三列信息卡片 -->
      <div class="info-cards-row">
        <!-- 股票信息卡片 -->
        <a-card class="info-card">
          <template #extra>
            <a-tag color="blue">股票信息</a-tag>
          </template>
          <div class="card-content">
            <div class="info-item">
              <span class="label">股票代码</span>
              <span class="value">
                <a
                  :href="`https://xueqiu.com/S/SH${fundInfo.code}`"
                  target="_blank"
                  class="stock-code-link">
                  {{ fundInfo.code }}
                  <font-awesome-icon icon="external-link-alt" />
                </a>
              </span>
            </div>
            <div class="info-item">
              <span class="label">股票名称</span>
              <span class="value">{{ fundInfo.name }}</span>
            </div>
            <div class="info-item">
              <span class="label">总投资金额</span>
              <span class="value highlight"
                >{{ fundInfo.totalAmount?.toLocaleString() }} 元</span
              >
            </div>
            <div class="info-item">
              <span class="label">初始价格</span>
              <span class="value"
                >{{ fundInfo.initialPrice?.toFixed(2) }} 元</span
              >
            </div>
            <div class="info-item">
              <span class="label">当前价格</span>
              <span class="value"
                >{{ fundInfo.currentPrice?.toFixed(2) }} 元</span
              >
            </div>
          </div>
        </a-card>

        <!-- 投资状态卡片 -->
        <a-card class="info-card">
          <template #extra>
            <a-tag color="green">投资状态</a-tag>
          </template>
          <div class="card-content">
            <div class="info-item">
              <span class="label">已买入份数</span>
              <span class="value"
                >{{ fundInfo.usedPortions }}/{{ fundInfo.portions }}</span
              >
            </div>
            <div class="info-item">
              <span class="label">每份金额</span>
              <span class="value"
                >{{ fundInfo.portionAmount?.toFixed(2) }} 元</span
              >
            </div>
            <div class="info-item">
              <span class="label">已投资金额</span>
              <span class="value highlight"
                >{{
                  (fundInfo.usedPortions * fundInfo.portionAmount)?.toFixed(2)
                }}
                元</span
              >
            </div>
            <div class="info-item">
              <span class="label">剩余可投</span>
              <span class="value"
                >{{
                  (
                    (fundInfo.portions - fundInfo.usedPortions) *
                    fundInfo.portionAmount
                  )?.toFixed(2)
                }}
                元</span
              >
            </div>
          </div>
        </a-card>

        <!-- 收益情况卡片 -->
        <a-card class="info-card">
          <template #extra>
            <a-tag color="orange">收益情况</a-tag>
          </template>
          <div class="card-content">
            <div class="info-item">
              <span class="label">当前市值</span>
              <span class="value">{{ getCurrentValue()?.toFixed(2) }} 元</span>
            </div>
            <div class="info-item">
              <span class="label">累计涨跌幅</span>
              <span
                class="value"
                :style="{
                  color: fundInfo.priceChange > 0 ? '#f53f3f' : '#00b42a',
                }">
                <font-awesome-icon
                  :icon="
                    fundInfo.priceChange >= 0 ? 'arrow-up' : 'arrow-down'
                  " />
                {{ fundInfo.priceChange >= 0 ? '+' : ''
                }}{{ fundInfo.priceChange?.toFixed(2) }}%
              </span>
            </div>
            <div class="info-item">
              <span class="label">相比上次买入</span>
              <span
                class="value"
                :style="{
                  color: getLastBuyChange() > 0 ? '#f53f3f' : '#00b42a',
                }">
                <font-awesome-icon
                  :icon="getLastBuyChange() >= 0 ? 'arrow-up' : 'arrow-down'" />
                {{ getLastBuyChange() >= 0 ? '+' : ''
                }}{{ getLastBuyChange()?.toFixed(2) }}%
              </span>
            </div>
            <div class="info-item">
              <span class="label">操作建议</span>
              <span class="value suggestion">
                {{ getOperationSuggestion() }}
              </span>
            </div>
          </div>
        </a-card>

        <!-- 时间信息卡片 -->
        <a-card class="info-card">
          <template #extra>
            <a-tag color="purple">时间信息</a-tag>
          </template>
          <div class="card-content">
            <div class="info-item">
              <span class="label">创建时间</span>
              <span class="value">{{
                formatDateTime(fundInfo.createTime)
              }}</span>
            </div>
            <div class="info-item">
              <span class="label">最后修改</span>
              <span class="value">{{
                fundInfo.updateTime ? formatDateTime(fundInfo.updateTime) : '-'
              }}</span>
            </div>
          </div>
        </a-card>
      </div>

      <!-- 每日更新卡片 -->
      <a-card class="update-card">
        <template #title>
          <font-awesome-icon icon="edit" /> 更新涨跌幅
        </template>
        <a-form
          :model="updateForm"
          layout="inline"
          @submit="updateDailyChange">
          <a-form-item
            label="今日涨跌幅 (%)"
            required>
            <a-input-number
              v-model="updateForm.dailyChange"
              placeholder="上涨输入正数，下跌输入负数"
              :precision="2"
              style="width: 250px" />
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :loading="updating">
              <font-awesome-icon icon="edit" /> 更新涨跌幅
            </a-button>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              @click="getDailyChange"
              :loading="updating">
              <font-awesome-icon icon="edit" /> 获取并更新涨跌幅
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>

      <!-- 操作提醒卡片 -->
      <a-card
        v-if="buyReminder || sellReminder"
        title="操作提醒"
        class="reminder-card">
        <div class="reminder-content">
          <div
            v-if="buyReminder"
            class="buy-reminder">
            <a-alert
              type="warning"
              :title="buyReminder.title"
              :description="buyReminder.description"
              show-icon
              closable>
              <template #action>
                <a-button
                  size="small"
                  type="primary"
                  @click="confirmBuy">
                  <font-awesome-icon icon="plus" /> 确认买入
                </a-button>
              </template>
            </a-alert>
          </div>

          <div
            v-if="sellReminder"
            class="sell-reminder">
            <a-alert
              type="success"
              :title="sellReminder.title"
              :description="sellReminder.description"
              show-icon
              closable>
              <template #action>
                <a-button
                  size="small"
                  type="primary"
                  @click="confirmSell">
                  确认卖出
                </a-button>
              </template>
            </a-alert>
          </div>
        </div>
      </a-card>

      <!-- 交易记录卡片 -->
      <a-card
        title="交易记录"
        class="history-card">
        <a-table
          :columns="historyColumns"
          :data="fundInfo.history || []"
          :pagination="false"
          size="small">
          <template #type="{ record }">
            <a-tag :color="record.type === 'buy' ? 'blue' : 'green'">
              {{ record.type === 'buy' ? '买入' : '卖出' }}
            </a-tag>
          </template>

          <template #amount="{ record }">
            ¥{{ record.amount?.toLocaleString() }}
          </template>

          <template #price="{ record }">
            ¥{{ record.price?.toFixed(2) }}
          </template>

          <template #time="{ record }">
            {{ formatTime(record.time) }}
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>

<script setup>
/**
 * 基金详情页面 - Vue 3 Composition API
 * 功能包括：基金信息展示、价格更新、买入卖出操作、交易记录管理
 */
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Message, Modal } from '@arco-design/web-vue';

// 路由相关
const route = useRoute(); // 获取当前路由信息（用于获取基金ID）
const router = useRouter(); // 路由导航（用于页面跳转）

/**
 * 响应式数据定义
 */
// 基金详细信息对象
const fundInfo = ref({});

// 价格更新状态标识
const updating = ref(false);

// 价格更新表单数据
const updateForm = reactive({
  dailyChange: null, // 今日涨跌幅百分比
});

/**
 * 交易记录表格列配置
 * 定义表格的列结构和显示格式
 */
const historyColumns = [
  {
    title: '类型',
    dataIndex: 'type',
    slotName: 'type', // 使用插槽自定义显示（买入/卖出标签）
    width: 80,
  },
  {
    title: '价格',
    dataIndex: 'price',
    slotName: 'price', // 使用插槽格式化价格显示
    width: 100,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    slotName: 'amount', // 使用插槽格式化金额显示
    width: 120,
  },
  {
    title: '时间',
    dataIndex: 'time',
    slotName: 'time', // 使用插槽格式化时间显示
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'note', // 直接显示备注文本
    width: 200,
  },
];

/**
 * 计算属性 - 买入提醒
 * 当股价相比上次买入价格下跌4%以上且还有可买份数时，显示买入提醒
 * @returns {Object|null} 买入提醒对象或null
 */
const buyReminder = computed(() => {
  // 检查必要数据是否存在
  if (!fundInfo.value.currentPrice || !fundInfo.value.lastBuyPrice) return null;

  // 计算相比上次买入价格的跌幅百分比
  const dropPercent =
    ((fundInfo.value.lastBuyPrice - fundInfo.value.currentPrice) /
      fundInfo.value.lastBuyPrice) *
    100;

  // 判断是否满足买入条件：跌幅>=4% 且 还有可买份数
  if (
    dropPercent >= 4 &&
    fundInfo.value.usedPortions < fundInfo.value.portions
  ) {
    const nextPortion = fundInfo.value.usedPortions + 1; // 下一份的序号
    const buyAmount = fundInfo.value.portionAmount; // 每份金额

    return {
      title: '买入提醒',
      description: `当前价格相比上次买入价格下跌${dropPercent.toFixed(
        2
      )}%，建议买入第${nextPortion}份，金额：¥${buyAmount?.toLocaleString()}`,
    };
  }
  return null;
});

/**
 * 计算属性 - 卖出提醒
 * 当累计涨幅达到15%以上时，显示卖出提醒
 * @returns {Object|null} 卖出提醒对象或null
 */
const sellReminder = computed(() => {
  // 检查累计涨跌幅数据是否存在
  if (!fundInfo.value.priceChange) return null;

  // 判断是否满足卖出条件：累计涨幅>=15%
  if (fundInfo.value.priceChange >= 15) {
    return {
      title: '卖出提醒',
      description: `累计涨幅已达${fundInfo.value.priceChange.toFixed(
        2
      )}%，建议全部卖出获利了结`,
    };
  }
  return null;
});

/**
 * 核心业务方法
 */

/**
 * 加载基金信息
 * 从localStorage读取基金列表，根据路由参数中的ID找到对应基金
 */
const loadFundInfo = () => {
  // 从本地存储获取基金列表
  const fundList = JSON.parse(localStorage.getItem('fundList') || '[]');
  // 从路由查询参数获取基金ID
  const fundId = route.query.id;

  if (fundId) {
    // 根据ID查找对应的基金信息
    const fund = fundList.find((f) => f.id == fundId);
    if (fund) {
      // 找到基金，复制数据到响应式对象
      fundInfo.value = { ...fund };
      // 重置更新表单
      updateForm.dailyChange = null;
    } else {
      // 未找到基金，显示错误并返回列表页
      Message.error('未找到该股票信息');
      goBack();
    }
  } else {
    // 缺少ID参数，显示错误并返回列表页
    Message.error('缺少股票ID参数');
    goBack();
  }
};

/**
 * 更新今日涨跌幅
 * 根据用户输入的涨跌幅百分比，计算并更新当前价格和累计涨跌幅
 */
const updateDailyChange = () => {
  // 验证输入数据
  if (updateForm.dailyChange === null || updateForm.dailyChange === undefined) {
    Message.error('请输入今日涨跌幅');
    return;
  }

  // 设置更新状态，显示加载效果
  updating.value = true;

  // 模拟异步更新过程（实际项目中可能是API调用）
  const oldPrice = fundInfo.value.currentPrice;

  // 根据涨跌幅百分比计算新的当前价格
  const changeRatio = updateForm.dailyChange / 100;
  fundInfo.value.currentPrice = oldPrice * (1 + changeRatio);

  // 重新计算累计涨跌幅（相对于初始买入价格）
  fundInfo.value.priceChange =
    ((fundInfo.value.currentPrice - fundInfo.value.initialPrice) /
      fundInfo.value.initialPrice) *
    100;

  // 更新最后修改时间
  fundInfo.value.updateTime = new Date().toISOString();

  // 保存更新后的数据到本地存储
  saveFundInfo();

  Message.success('价格更新成功');
  updating.value = false;
  updateForm.dailyChange = null;
};

/**
 * 确认买入操作
 * 显示确认对话框，用户确认后执行买入逻辑并记录交易历史
 */
const confirmBuy = () => {
  const nextPortion = fundInfo.value.usedPortions + 1; // 下一份的序号
  const buyAmount = fundInfo.value.portionAmount; // 买入金额

  // 显示确认对话框
  Modal.confirm({
    title: '确认买入',
    content: `确认以当前价格¥${fundInfo.value.currentPrice.toFixed(
      2
    )}买入第${nextPortion}份，金额¥${buyAmount?.toLocaleString()}？`,
    onOk: () => {
      // 用户确认后执行买入操作

      // 更新已买入份数
      fundInfo.value.usedPortions += 1;
      // 更新最后买入价格（用于计算下次买入提醒）
      fundInfo.value.lastBuyPrice = fundInfo.value.currentPrice;
      // 更新最后修改时间
      fundInfo.value.updateTime = new Date().toISOString();

      // 初始化交易历史数组（如果不存在）
      if (!fundInfo.value.history) {
        fundInfo.value.history = [];
      }

      // 添加买入记录到交易历史（最新记录在前）
      fundInfo.value.history.unshift({
        type: 'buy', // 交易类型：买入
        price: fundInfo.value.currentPrice, // 买入价格
        amount: fundInfo.value.portionAmount, // 买入金额
        time: new Date().toISOString(), // 交易时间
        note: `第${fundInfo.value.usedPortions}份买入`, // 备注信息
      });

      // 保存数据并显示成功消息
      saveFundInfo();
      Message.success('买入成功');
    },
  });
};

/**
 * 确认卖出操作
 * 显示确认对话框，用户确认后执行全部卖出逻辑，计算收益并重置投资状态
 */
const confirmSell = () => {
  // 显示确认对话框
  Modal.confirm({
    title: '确认卖出',
    content: `确认以当前价格¥${fundInfo.value.currentPrice.toFixed(
      2
    )}全部卖出？`,
    onOk: () => {
      // 用户确认后执行卖出操作

      // 计算总投资金额
      const totalInvested =
        fundInfo.value.usedPortions * fundInfo.value.portionAmount;

      // 计算当前总市值（基于股数和当前价格）
      const totalValue =
        (totalInvested / fundInfo.value.initialPrice) *
        fundInfo.value.currentPrice;

      // 计算总收益（市值 - 投资金额）
      const profit = totalValue - totalInvested;

      // 初始化交易历史数组（如果不存在）
      if (!fundInfo.value.history) {
        fundInfo.value.history = [];
      }

      // 添加卖出记录到交易历史
      fundInfo.value.history.unshift({
        type: 'sell', // 交易类型：卖出
        price: fundInfo.value.currentPrice, // 卖出价格
        amount: totalValue, // 卖出总金额
        time: new Date().toISOString(), // 交易时间
        note: `全部卖出，收益¥${profit.toFixed(2)}`, // 备注（包含收益信息）
      });

      // 重置投资状态，开始新一轮投资
      fundInfo.value.usedPortions = 1; // 重置为第1份
      fundInfo.value.initialPrice = fundInfo.value.currentPrice; // 当前价格作为新的初始价格
      fundInfo.value.lastBuyPrice = fundInfo.value.currentPrice; // 当前价格作为最后买入价格
      fundInfo.value.priceChange = 0; // 重置累计涨跌幅
      // 更新最后修改时间
      fundInfo.value.updateTime = new Date().toISOString();

      // 保存数据并显示成功消息（包含收益信息）
      saveFundInfo();
      Message.success(`卖出成功，收益¥${profit.toFixed(2)}`);
    },
  });
};

/**
 * 保存基金信息到本地存储
 * 更新localStorage中对应基金的数据
 */
const saveFundInfo = () => {
  // 获取完整的基金列表
  const fundList = JSON.parse(localStorage.getItem('fundList') || '[]');
  // 找到当前基金在列表中的索引
  const index = fundList.findIndex((f) => f.id === fundInfo.value.id);

  if (index > -1) {
    // 更新对应位置的基金数据
    fundList[index] = { ...fundInfo.value };
    // 保存回本地存储
    localStorage.setItem('fundList', JSON.stringify(fundList));
  }
};

/**
 * 返回基金列表页面
 * 使用路由导航回到列表页
 */
const goBack = () => {
  router.push('/fundList');
};

/**
 * 格式化日期时间
 * 将ISO时间字符串格式化为本地时间显示
 * @param {string} dateTimeString - ISO时间字符串
 * @returns {string} 格式化后的时间字符串
 */
const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) return '-';
  const date = new Date(dateTimeString);
  return (
    date.toLocaleDateString('zh-CN') +
    ' ' +
    date.toLocaleTimeString('zh-CN', { hour12: false })
  );
};

/**
 * 获取价格变化的CSS类名
 * 根据涨跌情况返回对应的样式类
 * @param {number} priceChange - 价格变化百分比
 * @returns {string} CSS类名
 */
const getPriceChangeClass = (priceChange) => {
  if (priceChange > 0) return 'price-up'; // 上涨：红色
  if (priceChange < 0) return 'price-down'; // 下跌：绿色
  return 'price-neutral'; // 无变化：灰色
};

/**
 * 格式化时间显示
 * 将ISO时间字符串转换为本地化的时间格式
 * @param {string} timeStr - ISO时间字符串
 * @returns {string} 格式化后的时间字符串
 */
const formatTime = (timeStr) => {
  return new Date(timeStr).toLocaleString('zh-CN');
};

/**
 * 计算当前持仓市值
 * 根据已买入份数、每份金额、初始价格和当前价格计算总市值
 * @returns {number} 当前市值
 */
const getCurrentValue = () => {
  // 检查必要数据是否完整
  if (
    !fundInfo.value.usedPortions ||
    !fundInfo.value.portionAmount ||
    !fundInfo.value.currentPrice ||
    !fundInfo.value.initialPrice
  ) {
    return 0;
  }

  // 计算总股数：(已买份数 × 每份金额) ÷ 初始价格
  const totalShares =
    (fundInfo.value.usedPortions * fundInfo.value.portionAmount) /
    fundInfo.value.initialPrice;

  // 计算当前市值：总股数 × 当前价格
  return totalShares * fundInfo.value.currentPrice;
};

/**
 * 计算相比上次买入的涨跌幅
 * 用于判断是否满足买入条件
 * @returns {number} 相比上次买入的涨跌幅百分比
 */
const getLastBuyChange = () => {
  // 检查必要数据是否存在
  if (!fundInfo.value.currentPrice || !fundInfo.value.lastBuyPrice) {
    return 0;
  }

  // 计算涨跌幅：(当前价格 - 上次买入价格) ÷ 上次买入价格 × 100
  return (
    ((fundInfo.value.currentPrice - fundInfo.value.lastBuyPrice) /
      fundInfo.value.lastBuyPrice) *
    100
  );
};

/**
 * 获取操作建议
 * 根据累计涨跌幅和相比上次买入的变化给出操作建议
 * @returns {string} 操作建议文本
 */
const getOperationSuggestion = () => {
  const lastBuyChange = getLastBuyChange(); // 相比上次买入的变化
  const totalChange = fundInfo.value.priceChange || 0; // 累计涨跌幅

  // 优先级1：累计涨幅>=15%，建议卖出
  if (totalChange >= 15) {
    return '建议全部卖出';
  }
  // 优先级2：相比上次买入跌幅>=4% 且 还有可买份数，建议买入
  else if (
    lastBuyChange <= -4 &&
    fundInfo.value.usedPortions < fundInfo.value.portions
  ) {
    return '建议买入一份';
  }
  // 默认：继续持有
  else {
    return '继续持有';
  }
};

// 获取涨跌幅
const getDailyChange = () => {
  updating.value = true;
  // fetch() GET /stock_info?code=股票代码
  fetch('https://fundapi.funjs.top/stock_info?code=' + fundInfo.value.code)
    .then((response) => response.json())
    .then(async (data) => {
      console.log(data);
      updateForm.dailyChange = data.change_percent;
      await updateDailyChange();
    })
    .finally(() => {
      updating.value = false;
    });
};

/**
 * 组件生命周期 - 挂载完成
 * 页面加载完成后自动加载基金信息
 */
onMounted(() => {
  loadFundInfo();
});
</script>

<style lang="less" scoped>
// 引入全局变量文件
@import '@/styles/variables.less';

/**
 * 基金详情页面样式
 * 包含基金信息展示、交易记录、买入卖出提醒等功能
 * 支持响应式布局和涨跌幅颜色区分
 */

/**
 * 主容器样式
 * 设置页面整体布局、最大宽度和背景
 */
.fund-detail-container {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

/**
 * 页面头部样式
 * 包含返回按钮和基金名称标题
 */
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;

  h1 {
    margin: 0;
    color: @text-color;
    font-size: 18px;
    font-weight: 600;
    margin-left: auto;
  }
}

/**
 * 主要内容区域
 * 使用垂直布局排列各个功能模块
 */
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/**
 * 信息卡片行布局
 * 使用 CSS Grid 实现四列等宽布局
 */
.info-cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  // 响应式布局：在较小屏幕上改为两列
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  // 响应式布局：在手机屏幕上改为单列
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

/**
 * 信息卡片样式
 * 统一的卡片外观，包含阴影和圆角
 */
.info-card {
  background: @bg-color;
  border-radius: @border-radius;
  box-shadow: @box-shadow-light;
  height: 280px;
}

/**
 * 功能卡片样式
 * 包括更新卡片、提醒卡片和历史记录卡片
 */
.update-card,
.reminder-card,
.history-card {
  background: @bg-color;
  border-radius: @border-radius;
  box-shadow: @box-shadow-light;
}

/**
 * 卡片内容区域
 * 设置内容的内边距
 */
.card-content {
  padding: 16px 0;
}

/**
 * 信息项样式
 * 标签-值对的展示格式，包含分隔线
 */
.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid @border-color;

  &:last-child {
    border-bottom: none;
  }

  // 信息标签样式
  .label {
    color: @text-color-secondary;
    font-size: 14px;
    font-weight: 500;
  }

  // 信息值样式
  .value {
    color: @text-color;
    font-size: 14px;
    font-weight: 600;

    // 高亮显示的重要数值
    &.highlight {
      color: @primary-color;
      font-size: 16px;
      font-weight: 700;
    }

    // 操作建议样式
    &.suggestion {
      color: @warning-color;
      font-weight: 600;
    }
  }
}

/**
 * 提醒内容区域
 * 设置最小高度以保持布局稳定
 */
.reminder-content {
  min-height: 60px;
}

/**
 * 买入和卖出提醒样式
 * 设置提醒项之间的间距
 */
.buy-reminder,
.sell-reminder {
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
}

/**
 * 涨跌幅颜色样式系统
 * 根据数值变化显示不同颜色和图标，提升数据可读性
 */
.price-up {
  color: @danger-color; // 上涨使用红色（符合中国市场习惯）
  font-weight: 600;

  :deep(.fa-arrow-up) {
    font-size: @icon-size-small;
    margin-right: 4px;
  }
}

.price-down {
  color: @success-color; // 下跌使用绿色（符合中国市场习惯）
  font-weight: 600;

  :deep(.fa-arrow-down) {
    font-size: @icon-size-small;
    margin-right: 4px;
  }
}

.price-neutral {
  color: @text-color-secondary; // 无变化使用灰色
  font-weight: 600;
}

/**
 * 股票代码链接样式
 * 提供可点击的外部链接，跳转到雪球网站查看详情
 */
.stock-code-link {
  color: @primary-color;
  text-decoration: none;
  transition: color 0.2s;

  // 悬停效果
  &:hover {
    color: @primary-hover-color;
    text-decoration: underline;
  }

  // 外部链接图标
  :deep(.fa-external-link-alt) {
    font-size: @icon-size-small;
    margin-left: 4px;
  }
}

/**
 * 按钮图标样式规范
 * 统一所有按钮内图标的大小和间距
 */
:deep(.arco-btn) {
  .fa-arrow-left,
  .fa-edit,
  .fa-plus {
    font-size: @icon-size-small;
    margin-right: 4px;
  }
}

/**
 * 卡片标题图标样式
 * 使用稍大的图标尺寸以突出重要性
 */
:deep(.arco-card-header-title) {
  .fa-edit {
    font-size: @icon-size-normal;
    margin-right: 6px;
  }
}

/**
 * Arco Design 组件样式覆盖
 * 统一组件外观与项目设计规范
 */
:deep(.arco-descriptions-item-label) {
  font-weight: 600;
  color: @text-color;
}

:deep(.arco-table-th) {
  background-color: #f7f8fa;
  font-weight: 600;
}

:deep(.arco-card-header) {
  border-bottom: 1px solid @border-color;
}

/**
 * 响应式设计
 * 适配不同屏幕尺寸的布局调整
 */
@media (max-width: 1024px) {
  .info-cards-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-card {
    height: auto;
  }
}

@media (max-width: 768px) {
  .fund-detail-container {
    padding: 16px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .header h1 {
    font-size: 20px;
  }
}
</style>
