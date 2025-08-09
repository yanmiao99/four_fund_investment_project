<template>
  <div class="documentation-container">
    <!-- 页面标题 -->
    <div class="header-section">
      <h1 class="main-title">📚 基金定投管理系统</h1>
      <p class="subtitle">基于4%定投法的智能基金投资管理平台</p>
    </div>

    <!-- 系统介绍 -->
    <a-card class="intro-card">
      <template #title>
        <div class="card-title">🚀 系统简介</div>
      </template>
      <div class="intro-content">
        <div class="intro-banner">
          <div class="banner-icon">📊</div>
          <div class="banner-text">
            <h2>专业基金定投管理平台</h2>
            <p>
              基于经过市场验证的<strong class="highlight">4%定投法</strong
              >投资策略设计，
              帮助投资者科学管理基金投资，规避追涨杀跌的情绪化操作，实现长期稳健收益。
            </p>
          </div>
        </div>
        <div class="features-grid">
          <div class="feature-item smart-strategy">
            <div class="feature-icon-wrapper">🧠</div>
            <h3>智能定投策略</h3>
            <p>基于4%定投法，在合理估值范围内，每下跌4%自动提醒定投</p>
          </div>
          <div class="feature-item profit-calc">
            <div class="feature-icon-wrapper">🧮</div>
            <h3>收益计算</h3>
            <p>实时计算投资收益、涨跌幅，提供清晰的投资数据分析</p>
          </div>
          <div class="feature-item alert-system">
            <div class="feature-icon-wrapper">🔔</div>
            <h3>操作提醒</h3>
            <p>智能分析当前价格走势，提供买入、卖出操作建议</p>
          </div>
          <div class="feature-item history-track">
            <div class="feature-icon-wrapper">📈</div>
            <h3>交易记录</h3>
            <p>完整记录每笔交易，支持历史数据查询和分析</p>
          </div>
        </div>
      </div>
    </a-card>

    <!-- 4%定投法介绍 -->
    <a-card class="method-card">
      <template #title>
        <div class="card-title">💡 4%定投法核心原理</div>
      </template>
      <div class="method-content">
        <div class="method-summary">
          <div class="strategy-icon">🎯</div>
          <h3>核心策略：1+1+4</h3>
          <p class="method-desc">
            在定投目标的合理估值范围内，相较于上一个买入点，每下跌4%，就定投一次，直至投资额使用完。
          </p>
        </div>

        <div class="method-steps">
          <div class="step-item step-target">
            <div class="step-number">🔍</div>
            <div class="step-content">
              <h4>🎯 确定定投目标</h4>
              <ul>
                <li>📅 选择发布时间超过7年的指数基金</li>
                <li>📈 业绩相对稳定，无明显周期波动</li>
                <li>✅ 经历过完整牛熊周期验证</li>
              </ul>
            </div>
          </div>

          <div class="step-item step-plan">
            <div class="step-number">📋</div>
            <div class="step-content">
              <h4>📝 制定投资计划</h4>
              <ul>
                <li>💰 设定总投资金额和分批次数</li>
                <li>🧮 确定每次定投的金额</li>
                <li>⚖️ 建立合理的估值参考体系</li>
              </ul>
            </div>
          </div>

          <div class="step-item step-execute">
            <div class="step-number">▶️</div>
            <div class="step-content">
              <h4>🚀 执行4%定投</h4>
              <ul>
                <li>📉 相较上次买入点下跌4%时定投</li>
                <li>🤖 严格按照计划执行，避免情绪化操作</li>
                <li>📊 持续跟踪并记录每次交易</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a-card>

    <!-- 投资优势 -->
    <a-card class="advantages-card">
      <template #title>
        <div class="card-title">🏆 4%定投法的投资优势</div>
      </template>
      <div class="advantages-content">
        <div class="advantages-header">
          <div class="header-decoration">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <h3>四大核心优势</h3>
        </div>
        <div class="advantage-list">
          <div class="advantage-item advantage-shield">
            <div class="advantage-icon-wrapper">🛡️</div>
            <div class="advantage-text">
              <h4><i class="fa fa-check-circle"></i> 规避追涨杀跌</h4>
              <p>
                通过系统化的定投策略，避免情绪化操作，在市场下跌时收集便宜筹码
              </p>
            </div>
          </div>

          <div class="advantage-item advantage-profit">
            <div class="advantage-icon-wrapper">🚀</div>
            <div class="advantage-text">
              <h4><i class="fa fa-check-circle"></i> 快速回本盈利</h4>
              <p>在市场反弹时能够较快回本并产生盈利，提高投资效率</p>
            </div>
          </div>

          <div class="advantage-item advantage-mindset">
            <div class="advantage-icon-wrapper">😊</div>
            <div class="advantage-text">
              <h4><i class="fa fa-check-circle"></i> 保持良好心态</h4>
              <p>真正做到涨也开心，跌也开心，减少投资过程中的心理压力</p>
            </div>
          </div>

          <div class="advantage-item advantage-growth">
            <div class="advantage-icon-wrapper">📈</div>
            <div class="advantage-text">
              <h4><i class="fa fa-check-circle"></i> 长期稳健收益</h4>
              <p>长期收益水平远超普通投资者，实现财富稳健增长</p>
            </div>
          </div>
        </div>
      </div>
    </a-card>

    <!-- 使用指南 -->
    <a-card class="guide-card">
      <template #title>
        <div class="card-title">🗺️ 系统使用指南</div>
      </template>
      <div class="guide-content">
        <div class="guide-header">
          <div class="guide-banner">
            <i class="fa fa-graduation-cap"></i>
            <h3>四步轻松上手</h3>
          </div>
        </div>
        <div class="guide-steps">
          <a-steps
            direction="vertical"
            :current="-1">
            <a-step
              title="添加基金"
              description="在基金列表页面添加您要定投的基金，输入基金代码、名称、总投资金额和初始价格">
              <template #icon>
                <div class="step-icon-wrapper add-fund">➕</div>
              </template>
            </a-step>

            <a-step
              title="设置参数"
              description="系统自动将总金额分为10份，您可以根据4%定投法逐步建仓">
              <template #icon>
                <div class="step-icon-wrapper set-params">⚙️</div>
              </template>
            </a-step>

            <a-step
              title="跟踪价格"
              description="定期更新基金当前价格，系统会自动计算涨跌幅并提供操作建议">
              <template #icon>
                <div class="step-icon-wrapper track-price">📈</div>
              </template>
            </a-step>

            <a-step
              title="执行操作"
              description="根据系统提醒和4%定投法原则，在合适时机进行买入或卖出操作">
              <template #icon>
                <div class="step-icon-wrapper execute-action">▶️</div>
              </template>
            </a-step>
          </a-steps>
        </div>
      </div>
    </a-card>

    <!-- 风险提示 -->
    <a-card class="risk-card">
      <template #title>
        <div class="card-title">⚠️ 投资风险提示</div>
      </template>
      <div class="risk-content">
        <div class="risk-banner">
          <div class="warning-icon">⚠️</div>
          <h3>投资需谨慎，理性做决策</h3>
        </div>
        <a-alert
          type="warning"
          show-icon>
          <template #icon>
            <div class="alert-icon">⚠️</div>
          </template>
          <div class="risk-text">
            <h4>ℹ️ 重要提醒</h4>
            <ul>
              <li>🔧 本系统仅为投资管理工具，不构成投资建议</li>
              <li>📊 4%定投法需要在合理估值范围内执行，请结合基本面分析</li>
              <li>⚠️ 投资有风险，入市需谨慎，请根据自身风险承受能力投资</li>
              <li>📈 历史业绩不代表未来表现，请理性投资</li>
            </ul>
          </div>
        </a-alert>
      </div>
    </a-card>

    <!-- 返回按钮 -->
    <div class="action-section">
      <a-button
        type="primary"
        size="large"
        class="start-button"
        @click="goToFundList">
        🚀 快速开始
      </a-button>
    </div>
  </div>
</template>

<script setup>
/**
 * 文档页面 - 系统介绍和使用指南
 * 介绍4%定投法的核心原理和系统功能
 */
import { useRouter } from 'vue-router';

// 路由实例，用于页面跳转
const router = useRouter();

/**
 * 返回基金列表页面
 */
const goToFundList = () => {
  router.push('/FundList');
};
</script>

<style lang="less" scoped>
// 引入全局变量
@import '@/styles/variables.less';

/* 文档页面容器 */
.documentation-container {
  margin: 0 auto;
  padding: @spacing-lg;
  min-height: 100vh;
  position: relative;
  padding: 2% 20%;
}

.documentation-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(120, 119, 198, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 119, 198, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(120, 219, 255, 0.3) 0%,
      transparent 50%
    );
  pointer-events: none;
}

/* 页面标题区域 */
.header-section {
  text-align: center;
  margin-bottom: @spacing-md;
  padding: 40px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 3s infinite;
  }

  .main-title {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: @spacing-md;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;

    .fa {
      margin-right: @spacing-sm;
      color: @warning-color;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    opacity: 0.95;
    margin: 0;
    position: relative;
    z-index: 1;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* 卡片标题样式 */
.card-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-top: 20px;
}

.title-icon {
  font-size: 1.6rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 卡片通用样式 */
.intro-card,
.method-card,
.advantages-card,
.guide-card,
.risk-card {
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06);
  border: none;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: relative;

  :deep(.arco-card-header) {
    background: @bg-color-hover;
    border-bottom: 1px solid @border-color;

    .arco-card-header-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: @text-color;
    }
  }
}

/* 系统介绍卡片 */
.intro-content {
  padding: 30px;

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: @spacing-lg;
    color: @text-color-secondary;
  }
}

.intro-banner {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')
      repeat;
    pointer-events: none;
  }
}

.banner-icon {
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.banner-text {
  h2 {
    margin: 0 0 15px 0;
    font-size: 2.2rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.95;
  }
}

.highlight {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

/* 功能特性网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.feature-item {
  text-align: center;
  padding: 30px 25px;
  background: white;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(102, 126, 234, 0.05),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &.smart-strategy:hover {
    border-color: rgba(255, 107, 107, 0.5);
    box-shadow: 0 20px 40px rgba(255, 107, 107, 0.2);
  }

  &.profit-calc:hover {
    border-color: rgba(72, 187, 120, 0.5);
    box-shadow: 0 20px 40px rgba(72, 187, 120, 0.2);
  }

  &.alert-system:hover {
    border-color: rgba(255, 193, 7, 0.5);
    box-shadow: 0 20px 40px rgba(255, 193, 7, 0.2);
  }

  &.history-track:hover {
    border-color: rgba(108, 117, 125, 0.5);
    box-shadow: 0 20px 40px rgba(108, 117, 125, 0.2);
  }

  .feature-icon-wrapper {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    font-size: 26px;
  }

  &.smart-strategy .feature-icon-wrapper {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  }

  &.profit-calc .feature-icon-wrapper {
    background: linear-gradient(135deg, #48bb78, #68d391);
  }

  &.alert-system .feature-icon-wrapper {
    background: linear-gradient(135deg, #ffc107, #ffd54f);
  }

  &.history-track .feature-icon-wrapper {
    background: linear-gradient(135deg, #6c757d, #8e9aaf);
  }

  .feature-icon {
    font-size: 2.2rem;
    color: white;
    transition: transform 0.3s ease;
  }

  &:hover .feature-icon {
    transform: scale(1.1) rotate(5deg);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: @text-color;
    position: relative;
    z-index: 1;
  }

  p {
    color: @text-color-secondary;
    line-height: 1.7;
    margin: 0;
    position: relative;
    z-index: 1;
  }
}

/* 方法介绍卡片 */
.method-content {
  padding: 30px;

  .method-summary {
    text-align: center;
    margin-bottom: 40px;
    padding: 40px 30px;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 20px;
    color: white;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.1) 1px,
        transparent 1px
      );
      background-size: 20px 20px;
      animation: float 6s ease-in-out infinite;
    }

    .strategy-icon {
      font-size: 3rem;
      margin-bottom: 20px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    h3 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .method-desc {
      font-size: 1.2rem;
      line-height: 1.7;
      margin: 0;
      opacity: 0.95;
      position: relative;
      z-index: 1;
    }
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 步骤列表 */
.method-steps {
  display: grid;
  gap: 25px;

  .step-item {
    display: flex;
    align-items: flex-start;
    padding: 30px;
    background: white;
    border-radius: 16px;
    transition: all 0.4s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      transition: width 0.3s ease;
    }

    &:hover {
      background: #f8f9ff;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
      transform: translateX(8px);
      border-color: rgba(102, 126, 234, 0.2);

      &::before {
        width: 8px;
      }
    }

    &.step-target:hover {
      border-color: rgba(255, 107, 107, 0.3);
      background: #fff5f5;
    }

    &.step-plan:hover {
      border-color: rgba(72, 187, 120, 0.3);
      background: #f0fff4;
    }

    &.step-execute:hover {
      border-color: rgba(255, 193, 7, 0.3);
      background: #fffbf0;
    }

    .step-number {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      flex-shrink: 0;
      position: relative;
      transition: all 0.3s ease;
      font-size: 26px;

      i {
        font-size: 1.2rem;
        margin-bottom: 2px;
      }

      span {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }

    &.step-target .step-number {
      background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
      color: white;
    }

    &.step-plan .step-number {
      background: linear-gradient(135deg, #48bb78, #68d391);
      color: white;
    }

    &.step-execute .step-number {
      background: linear-gradient(135deg, #ffc107, #ffd54f);
      color: white;
    }

    &:hover .step-number {
      transform: scale(1.1) rotate(5deg);
    }

    .step-content {
      flex: 1;

      h4 {
        font-size: 1.4rem;
        margin-bottom: 15px;
        color: @text-color;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      ul {
        margin: 0;
        padding-left: 0;
        list-style: none;

        li {
          margin-bottom: 12px;
          color: @text-color-secondary;
          line-height: 1.7;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 10px;

          i {
            color: #667eea;
            width: 16px;
          }
        }
      }
    }
  }
}

/* 优势卡片 */
.advantages-content {
  padding: 30px;
}

.advantages-header {
  text-align: center;
  margin-bottom: 40px;

  .header-decoration {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;

    i {
      font-size: 1.5rem;
      color: #ffd700;
      animation: twinkle 2s infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.5s;
      }

      &:nth-child(3) {
        animation-delay: 1s;
      }
    }
  }

  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c3e50;
  }
}

@keyframes twinkle {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* 优势列表 */
.advantage-list {
  display: grid;
  gap: 25px;

  .advantage-item {
    display: flex;
    align-items: center;
    padding: 30px;
    background: white;
    border-radius: 16px;
    transition: all 0.4s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        transparent,
        rgba(102, 126, 234, 0.03),
        transparent
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: #f8f9ff;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);

      &::before {
        opacity: 1;
      }
    }

    &.advantage-shield:hover {
      border-color: rgba(40, 167, 69, 0.3);
      box-shadow: 0 15px 35px rgba(40, 167, 69, 0.15);
    }

    &.advantage-profit:hover {
      border-color: rgba(0, 123, 255, 0.3);
      box-shadow: 0 15px 35px rgba(0, 123, 255, 0.15);
    }

    &.advantage-mindset:hover {
      border-color: rgba(255, 193, 7, 0.3);
      box-shadow: 0 15px 35px rgba(255, 193, 7, 0.15);
    }

    &.advantage-growth:hover {
      border-color: rgba(23, 162, 184, 0.3);
      box-shadow: 0 15px 35px rgba(23, 162, 184, 0.15);
    }

    .advantage-icon-wrapper {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      flex-shrink: 0;
      transition: all 0.3s ease;
      font-size: 26px;
    }

    &.advantage-shield .advantage-icon-wrapper {
      background: linear-gradient(135deg, #28a745, #34ce57);
    }

    &.advantage-profit .advantage-icon-wrapper {
      background: linear-gradient(135deg, #007bff, #0056b3);
    }

    &.advantage-mindset .advantage-icon-wrapper {
      background: linear-gradient(135deg, #ffc107, #e0a800);
    }

    &.advantage-growth .advantage-icon-wrapper {
      background: linear-gradient(135deg, #17a2b8, #138496);
    }

    .advantage-icon {
      font-size: 2rem;
      color: white;
      transition: transform 0.3s ease;
    }

    &:hover .advantage-icon {
      transform: scale(1.1) rotate(-5deg);
    }

    .advantage-text {
      flex: 1;

      h4 {
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: @text-color;
        display: flex;
        align-items: center;
        gap: 10px;

        i {
          color: #28a745;
          font-size: 1.1rem;
        }
      }

      p {
        margin: 0;
        color: @text-color-secondary;
        line-height: 1.7;
      }
    }
  }
}

/* 使用指南 */
.guide-content {
  padding: 30px;

  .guide-header {
    text-align: center;
    margin-bottom: 40px;

    .guide-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 25px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 16px;
      color: white;
      margin-bottom: 20px;

      i {
        font-size: 2.5rem;
      }

      h3 {
        margin: 0;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }

  .guide-steps {
    max-width: 700px;
    margin: 0 auto;

    .step-icon-wrapper {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.6rem;
      transition: all 0.3s ease;

      &.add-fund {
        background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
      }

      &.set-params {
        background: linear-gradient(135deg, #48bb78, #68d391);
      }

      &.track-price {
        background: linear-gradient(135deg, #667eea, #764ba2);
      }

      &.execute-action {
        background: linear-gradient(135deg, #ffc107, #ffd54f);
      }
    }

    :deep(.arco-steps-item-icon) {
      background: @primary-color;
      border-color: @primary-color;

      .fa {
        color: white;
      }
    }

    :deep(.arco-steps-item-title) {
      font-weight: 600;
      color: @text-color;
    }

    :deep(.arco-steps-item-description) {
      color: @text-color-secondary;
      line-height: 1.5;
    }
  }
}

/* 风险提示 */
.risk-content {
  padding: 30px;

  .risk-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    padding: 25px;
    background: linear-gradient(135deg, #ff9a56, #ff6b6b);
    border-radius: 16px;
    color: white;

    .warning-icon {
      font-size: 2.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .alert-icon {
    background: linear-gradient(135deg, #ff9a56, #ff6b6b);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .risk-text {
    h4 {
      margin-bottom: 20px;
      color: #856404;
      font-size: 1.3rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    ul {
      margin: 0;
      padding-left: 0;
      list-style: none;

      li {
        margin-bottom: 15px;
        color: #856404;
        line-height: 1.7;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-left: 10px;

        i {
          color: #ff6b6b;
          width: 16px;
        }
      }
    }
  }
}

/* 操作区域 */
.action-section {
  text-align: center;
  padding: @spacing-md 0;
  margin-top: 40px;

  .arco-btn {
    border-radius: 50px;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    }

    .fa {
      margin-right: @spacing-xs;
    }
  }

  .start-button {
    font-size: 18px;
    padding: 12px 40px;
    height: auto;
    border-radius: 25px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(102, 126, 234, 0.4);
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
  }
}

/* 响应式设计 */
@media (max-width: @screen-md) {
  .documentation-container {
    padding: @spacing-md;
  }

  .header-section {
    padding: 30px 20px;

    .main-title {
      font-size: 2.2rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  .intro-banner {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .method-steps .step-item {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;

    .step-number {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  .advantage-list .advantage-item {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;

    .advantage-icon-wrapper {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  .guide-banner {
    flex-direction: column;
    gap: 10px;
  }

  .risk-banner {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
