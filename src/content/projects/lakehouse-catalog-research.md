---
order: 1
title: Lakehouse Catalog Research
description: 系统比较开放协议与主流 Catalog 实现，把功能清单转化为架构边界、选型依据和可验证结论。
eyebrow: Data Infrastructure
period: Ongoing
status: Active
topics:
  - Lakehouse
  - Catalog
  - Apache Iceberg
  - Open Source
repository: https://github.com/HardingHang/catalog-service-research
featured: true
---

## 问题

Catalog 正在从单一元数据服务演变为数据平台的控制面。不同项目都使用相似的词汇，
但在协议兼容、资产模型、权限边界、凭证下发和联邦能力上存在明显差异。

只比较功能列表无法回答真正的架构问题：哪些能力属于开放标准，哪些是具体产品的扩展，
哪些结论已经得到验证，哪些仍然只是设计提议。

## 方法

研究以 Iceberg REST 等开放协议为基线，对主流开源 Catalog 进行分层比较：

- 区分协议、产品实现与部署形态；
- 检查接口、文档和代码，而不只采用产品宣传材料；
- 按资产模型、互操作、治理、安全和运维边界组织证据；
- 显式记录版本、来源、验证状态和仍需实验确认的问题。

## 产出

项目形成了一组可追踪的调研报告、专题分析和选型材料。它们不仅给出结论，
也保留结论依赖的需求、版本和证据路径，以便在生态快速变化时重新验证。

## 当前方向

目前继续关注开放 Catalog 协议的演进、外部 Catalog 联邦、Credential Vending，
以及面向 AI 和语义资产的元数据边界。
