---
order: 2
title: Cross-Model KV Cache Transfer
description: 面向跨模型 KV Cache 转换的论文复现与机制分析，建立从离线验收到 GPU 实验的分阶段证据链。
eyebrow: AI Systems
period: 2026 — Ongoing
status: Active
topics:
  - LLM Inference
  - KV Cache
  - Reproducibility
  - Evaluation
repository: https://github.com/HardingHang/kv-cache-translation
featured: true
---

## 问题

KV Cache 通常与生成它的模型绑定。如果不同规模或架构的模型能够可靠地转换和复用缓存，
就可能减少重复的长上下文预填充成本。然而，从表示空间中的相关性到下游任务中的真实收益，
中间存在许多容易被混淆的评价层次。

## 方法

项目将工程验收、论文原始实验复现和扩展研究分成独立阶段：

1. 先验证模型加载、缓存注入、转换接口和评测管线；
2. 再复现论文主表、消融实验和资源开销；
3. 在基线可信后，分析跨层、跨域、长上下文和部署条件；
4. 分开报告表示指标、下游质量、延迟与资源成本。

这种分层避免把“代码成功运行”误认为“论文结论已经复现”，也避免把相关性指标直接解释为因果机制。

## 当前状态

离线工程验收已经完成，GPU 环境下的真实模型与评测验证仍在推进。
当前公开结论会严格区分已经测量的结果、论文报告值与尚待验证的计划。

## 预期产出

最终产出包括可复现的实验入口、版本固定的模型与数据清单、原始结果、自动生成的汇总表，
以及对成功条件和失败边界的机制分析。
