---
order: 3
title: Robust Predictive Resource Scaling
description: 面向云数据库工作负载的概率预测与资源伸缩研究，关注预测不确定性如何进入系统决策。
eyebrow: Database Systems
period: Research project
status: Research
topics:
  - Cloud Database
  - Auto-scaling
  - Forecasting
  - Uncertainty
repository: https://github.com/HardingHang/robust_predictive_resource_scaling
featured: true
---

## 问题

云数据库的资源伸缩需要同时权衡服务质量与资源成本。只使用单点负载预测，
会隐藏预测误差，并可能在突发变化中导致资源不足或过度配置。

## 研究方向

该项目探索如何使用概率工作负载预测表达未来需求的不确定性，
并将这种不确定性传递给资源伸缩策略，而不是在预测完成后再使用固定安全余量。

## 系统视角

研究把预测准确率与实际伸缩效果区分开来：预测模型的误差指标只是中间证据，
最终仍需要观察服务水平、资源成本、调整频率以及不同工作负载下的鲁棒性。

## 产出

项目代码和相关实验材料保存在公开仓库中。这里保留其研究问题与系统意义，
具体实验条件和结果以仓库中的版本化材料为准。
