const workflows = [
  {
    id: "resume",
    title: "AI产品简历与定位",
    week: "第1周",
    summary: "完成主简历和3类岗位定位，启动小规模投递。",
    deliverables: ["通用简历", "电商AI版", "供应链质检版", "自我介绍"],
    tasks: ["列出3段最强经历", "收集30个JD样本", "提取岗位高频关键词", "完成AI产品经理通用简历", "生成电商AI版简历", "生成供应链/质检AI版简历", "完成30秒自我介绍"]
  },
  {
    id: "qc-copilot",
    title: "Fashion QC Copilot",
    week: "第1-2周",
    summary: "把质检审单经验做成主作品集，覆盖PRD、流程、指标和脱敏样例。",
    deliverables: ["PRD", "流程图", "Dify节点表", "模拟输入输出", "指标体系"],
    tasks: ["写项目背景和用户画像", "梳理质检审单痛点", "画字段抽取到审核建议流程图", "整理Dify节点说明表", "制作模拟输入输出样例", "定义字段抽取准确率等指标", "补充脱敏与人审兜底策略"]
  },
  {
    id: "supplier-risk",
    title: "供应商质量风险看板",
    week: "第3周",
    summary: "用质量数据和供应商管理经验做第二作品，证明数据产品和供应链决策能力。",
    deliverables: ["模拟数据表", "风险评分规则", "看板线框", "AI周报摘要"],
    tasks: ["设计供应商模拟数据字段", "定义严重疵点与复发率规则", "定义整改超期与批次波动规则", "画风险排行与趋势看板线框", "写AI质量周报摘要样例", "整理供应商行动建议"]
  },
  {
    id: "interview",
    title: "面试故事与投递",
    week: "第4周",
    summary: "准备8个STAR故事并进入投递，获取真实市场反馈。",
    deliverables: ["8个STAR", "投递表", "面试复盘", "JD反馈"],
    tasks: ["写AI审单STAR故事", "写AI图像识别嵌入品控故事", "写供应商质量管理故事", "写大货抽检异常复盘故事", "写外包转型员工面谈故事", "完成10-20个岗位投递测试", "记录JD匹配度与反馈"]
  },
  {
    id: "ops-system",
    title: "求职支撑系统",
    week: "全月",
    summary: "建立求职、作品集、健康、财务的执行看板，避免资料散落。",
    deliverables: ["Obsidian入口", "投递表", "健康表", "财务表", "周复盘"],
    tasks: ["维护Obsidian知识库入口", "建立投递记录字段", "建立健康执行记录", "建立月度财务记录", "每周日完成周复盘", "每次面试后更新复盘"]
  }
];

const portfolioItems = [
  {
    id: "qc-copilot",
    title: "Fashion QC Copilot",
    type: "主作品",
    status: "进行中",
    copy: "面向服饰质检审单场景，设计字段抽取、SOP校验、疵点库检索、规则判定和人工复核。",
    stats: [["目标岗位", "服饰/供应链AI PM"], ["核心证据", "Dify工作流 + 指标页"], ["展示方式", "案例页 + 流程图"]]
  },
  {
    id: "supplier-risk",
    title: "供应商质量风险看板",
    type: "第二作品",
    status: "待启动",
    copy: "把抽检、严重疵点、复发率、整改超期等数据转成供应商风险评分和行动建议。",
    stats: [["目标岗位", "供应链AI/数据产品"], ["核心证据", "模拟数据 + 评分规则"], ["展示方式", "看板线框 + 周报"]]
  },
  {
    id: "visual-qc",
    title: "外观质检视觉模块",
    type: "扩展模块",
    status: "待拆解",
    copy: "基于外观缺陷识别项目拆解，定义AI可判、AI辅助、人工复核边界。",
    stats: [["目标岗位", "多模态/视觉AI产品"], ["核心证据", "公开项目拆解"], ["展示方式", "模块方案"]]
  }
];

const targetRoles = [
  { id: "fashion-ai-pm", title: "服饰/电商AI产品经理", city: "上海/杭州", fit: 92, reason: "服饰品控、跨境电商、AI审单和作品集主线最贴合。", keywords: ["电商", "服饰", "商品审核", "AI应用", "质检"] },
  { id: "supply-qc-ai-pm", title: "供应链/质检AI产品经理", city: "上海/杭州/北京", fit: 90, reason: "供应商管理、抽检规则、质量数据和AI图像识别经验可迁移。", keywords: ["供应链", "质检", "质量风控", "数据产品", "AI识别"] },
  { id: "agent-pm", title: "AI Agent流程自动化产品经理", city: "北京/上海/杭州", fit: 84, reason: "Dify工作流、原子化拆解和内部流程自动化可作为证据。", keywords: ["Agent", "Dify", "工作流", "RPA", "流程自动化"] },
  { id: "ai-solution", title: "AI解决方案产品经理", city: "上海/北京", fit: 82, reason: "业务侧到AI方案设计的桥接能力较强，适合零售/供应链客户。", keywords: ["解决方案", "售前", "行业方案", "AI落地", "客户需求"] },
  { id: "audit-risk-data", title: "质量/审核/风控数据产品", city: "杭州/上海", fit: 78, reason: "规则审核、异常归因和风险看板可证明产品化能力。", keywords: ["审核", "风控", "风险评分", "数据看板", "策略产品"] }
];

const aiProviderPresets = {
  "volcengine-agent-plan": {
    label: "火山方舟 Agent Plan · Claude/Anthropic",
    baseUrl: "https://ark.cn-beijing.volces.com/api/plan",
    model: "ark-code-latest",
    apiStyle: "anthropic",
    hint: "用于方舟 Agent Plan 给 Claude Code/AI工具的 Anthropic-compatible 入口。Model 以控制台显示的模型/接入点 ID 为准。"
  },
  "volcengine-agent-plan-openai": {
    label: "火山方舟 Agent Plan · OpenAI兼容",
    baseUrl: "https://ark.cn-beijing.volces.com/api/plan/v3",
    model: "ark-code-latest",
    apiStyle: "openai",
    hint: "用于方舟 Agent Plan 的 OpenAI-compatible 入口，请确认你的 Plan 已开通该协议。"
  },
  "volcengine-ark": {
    label: "火山方舟 Ark 标准接口",
    baseUrl: "https://ark.cn-beijing.volces.com/api/v3",
    model: "",
    apiStyle: "openai",
    hint: "用于普通方舟推理接口。Model 通常填写控制台里的模型 ID 或接入点 ID。"
  },
  "openai-compatible": {
    label: "OpenAI-compatible",
    baseUrl: "https://api.openai.com/v1",
    model: "gpt-4.1-mini",
    apiStyle: "openai",
    hint: "用于标准 /chat/completions 兼容服务。"
  },
  "custom-anthropic": {
    label: "自定义 Anthropic-compatible",
    baseUrl: "",
    model: "",
    apiStyle: "anthropic",
    hint: "用于自定义 /v1/messages 兼容网关，Base URL 不要包含 /v1/messages。"
  },
  custom: {
    label: "自定义",
    baseUrl: "",
    model: "",
    apiStyle: "openai",
    hint: "保留当前输入，适合代理网关、公司内网或其他兼容服务。"
  }
};

const storageKey = "career-os-record-v2";
const legacyProgressKey = "career-workflow-progress-v1";
const remoteConfigKey = "career-workflow-remote-config-v1";
const aiConfigKey = "career-os-ai-config-v1";
let remoteConfig = loadRemoteConfig();
let aiConfig = loadAiConfig();
const vaultSessionKey = "career-os-vault-unlocked";

let appState = migrateRecord(loadLocalRecord());
let progress = appState.progress;
let decryptedVault = null;
let vaultPassphrase = "";
let pushTimer = null;
let activeTaskKey = null;

const views = {};
document.querySelectorAll(".view").forEach((section) => {
  views[section.id.replace("View", "")] = section;
});

const viewTitles = {
  overview: "总览",
  workflows: "工作流",
  today: "今日",
  portfolio: "作品集",
  fragments: "知识/经历",
  jobs: "岗位选择",
  applications: "投递跟踪",
  interviews: "面试复盘"
};

function defaultVault() {
  return {
    taskDetails: {},
    fragments: [],
    jobs: [],
    applications: [],
    interviews: [],
    aiOutputs: [],
    updatedAt: new Date().toISOString()
  };
}

function migrateRecord(record) {
  const legacyProgress = loadLegacyProgress();
  const progressRecord = record?.progress && typeof record.progress === "object" ? record.progress : legacyProgress;
  return {
    schemaVersion: 2,
    source: record?.source || "web-local",
    userId: record?.userId || getUserId(),
    clientUpdatedAt: record?.clientUpdatedAt || new Date().toISOString(),
    updatedAt: record?.updatedAt || new Date().toISOString(),
    overall: record?.overall || getStatsFromProgress(progressRecord),
    progress: progressRecord || {},
    vault: record?.vault || null,
    vaultMeta: record?.vaultMeta || { locked: true, itemCounts: {}, updatedAt: null }
  };
}

function loadLocalRecord() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || null;
  } catch {
    return null;
  }
}

function loadLegacyProgress() {
  try {
    return JSON.parse(localStorage.getItem(legacyProgressKey)) || {};
  } catch {
    return {};
  }
}

function saveLocalRecord() {
  appState.progress = progress;
  appState.overall = getAllStats();
  appState.clientUpdatedAt = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(appState));
  localStorage.setItem(legacyProgressKey, JSON.stringify(progress));
}

function loadRemoteConfig() {
  try {
    return JSON.parse(localStorage.getItem(remoteConfigKey)) || {};
  } catch {
    return {};
  }
}

function saveRemoteConfig() {
  localStorage.setItem(remoteConfigKey, JSON.stringify(remoteConfig));
}

function loadAiConfig() {
  try {
    return normalizeAiConfig(JSON.parse(localStorage.getItem(aiConfigKey)) || {});
  } catch {
    return {};
  }
}

function saveAiConfig() {
  localStorage.setItem(aiConfigKey, JSON.stringify(aiConfig));
}

function normalizeAiConfig(config) {
  if (!config || typeof config !== "object") return {};
  const hasRealKey = Boolean(config.apiKey && config.apiKey.trim());
  const oldOpenAiDefault = !config.provider && (!config.baseUrl || config.baseUrl === "https://api.openai.com/v1");
  if (!hasRealKey && oldOpenAiDefault) {
    return { provider: "volcengine-agent-plan" };
  }
  if (config.provider === "volcengine-agent-plan" && (config.baseUrl || "").includes("/api/plan/v3")) {
    return { ...config, provider: "volcengine-agent-plan-openai", apiStyle: "openai" };
  }
  return config;
}

function inferAiProvider(config = aiConfig) {
  if (config.provider && aiProviderPresets[config.provider]) return config.provider;
  const baseUrl = config.baseUrl || "";
  if (baseUrl.includes("ark.cn-beijing.volces.com/api/plan/v3")) return "volcengine-agent-plan-openai";
  if (baseUrl.includes("ark.cn-beijing.volces.com/api/plan")) return "volcengine-agent-plan";
  if (baseUrl.includes("ark.cn-beijing.volces.com/api/v3")) return "volcengine-ark";
  if (baseUrl.includes("api.openai.com")) return "openai-compatible";
  return "volcengine-agent-plan";
}

function aiPreset(provider) {
  return aiProviderPresets[provider] || aiProviderPresets.custom;
}

function applyAiPresetToFields(provider, overwrite = true) {
  const preset = aiPreset(provider);
  const base = document.querySelector("#aiBaseUrlInput");
  const model = document.querySelector("#aiModelInput");
  const hint = document.querySelector("#aiProviderHint");
  if (base && preset.baseUrl && (overwrite || !base.value.trim())) base.value = preset.baseUrl;
  if (model && preset.model && (overwrite || !model.value.trim())) model.value = preset.model;
  if (hint) hint.textContent = preset.hint;
}

function collectAiConfigFromFields() {
  const provider = document.querySelector("#aiProviderSelect")?.value || inferAiProvider();
  const preset = aiPreset(provider);
  return {
    provider,
    apiStyle: preset.apiStyle || "openai",
    baseUrl: document.querySelector("#aiBaseUrlInput")?.value.trim() || "",
    model: document.querySelector("#aiModelInput")?.value.trim() || "",
    apiKey: document.querySelector("#aiApiKeyInput")?.value.trim() || ""
  };
}

function getApiBase() {
  return (remoteConfig.apiBase || window.location.origin).replace(/\/$/, "");
}

function getProvider() {
  return remoteConfig.provider || "github";
}

function getUserId() {
  return remoteConfig.userId || "default";
}

function getToken() {
  return remoteConfig.token || "";
}

function getGithubConfig() {
  return {
    owner: remoteConfig.githubOwner || "jackprox26",
    repo: remoteConfig.githubRepo || "career-workflow-progress",
    branch: remoteConfig.githubBranch || "main",
    path: remoteConfig.githubPath || "progress/default.json"
  };
}

function setSyncStatus(message, tone = "neutral") {
  const element = document.querySelector("#syncStatus");
  if (!element) return;
  element.textContent = message;
  element.dataset.tone = tone;
}

function setVaultStatus(message, tone = "neutral") {
  const element = document.querySelector("#vaultStatus");
  if (!element) return;
  element.textContent = message;
  element.dataset.tone = tone;
}

function setAiStatus(message, tone = "neutral") {
  const element = document.querySelector("#aiStatus");
  if (!element) return;
  element.textContent = message;
  element.dataset.tone = tone;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function taskKey(workflowId, index) {
  return `${workflowId}:${index}`;
}

function getTaskMeta(key) {
  for (const workflow of workflows) {
    const index = workflow.tasks.findIndex((_, taskIndex) => taskKey(workflow.id, taskIndex) === key);
    if (index !== -1) return { workflow, index, title: workflow.tasks[index], key };
  }
  return { workflow: null, index: -1, title: key, key };
}

function allTaskOptions(selected = "") {
  return workflows
    .flatMap((workflow) => workflow.tasks.map((task, index) => ({ key: taskKey(workflow.id, index), label: `${workflow.title} / ${task}` })))
    .map((item) => `<option value="${escapeHtml(item.key)}" ${item.key === selected ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
    .join("");
}

function getVault() {
  return decryptedVault;
}

function requireVault() {
  if (!decryptedVault) throw new Error("资料库未解锁");
  return decryptedVault;
}

function vaultCounts(vault) {
  return {
    taskDetails: Object.keys(vault.taskDetails || {}).length,
    fragments: vault.fragments?.length || 0,
    jobs: vault.jobs?.length || 0,
    applications: vault.applications?.length || 0,
    interviews: vault.interviews?.length || 0
  };
}

function updateVaultMeta() {
  appState.vaultMeta = {
    locked: !decryptedVault,
    itemCounts: decryptedVault ? vaultCounts(decryptedVault) : appState.vaultMeta?.itemCounts || {},
    updatedAt: decryptedVault?.updatedAt || appState.vaultMeta?.updatedAt || null
  };
}

function getStatsFromProgress(progressRecord) {
  const total = workflows.reduce((sum, workflow) => sum + workflow.tasks.length, 0);
  const done = workflows.reduce((sum, workflow) => {
    return sum + workflow.tasks.filter((_, index) => progressRecord?.[taskKey(workflow.id, index)]).length;
  }, 0);
  return { total, done, percent: total === 0 ? 0 : Math.round((done / total) * 100) };
}

function getWorkflowStats(workflow) {
  const total = workflow.tasks.length;
  const done = workflow.tasks.filter((_, index) => progress[taskKey(workflow.id, index)]).length;
  return { total, done, percent: total === 0 ? 0 : Math.round((done / total) * 100) };
}

function getAllStats() {
  return getStatsFromProgress(progress);
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToBytes(base64) {
  const binary = atob(base64.replace(/\n/g, ""));
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function textToBase64(text) {
  return bytesToBase64(new TextEncoder().encode(text));
}

function base64ToText(base64) {
  return new TextDecoder().decode(base64ToBytes(base64));
}

async function deriveVaultKey(passphrase, salt, iterations) {
  const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(passphrase), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptVault(vault, passphrase) {
  if (!passphrase) throw new Error("缺少资料口令");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const iterations = 210000;
  const key = await deriveVaultKey(passphrase, salt, iterations);
  const plaintext = new TextEncoder().encode(JSON.stringify(vault));
  const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext));
  return {
    algorithm: "PBKDF2-AES-GCM",
    kdf: "PBKDF2",
    hash: "SHA-256",
    iterations,
    salt: bytesToBase64(salt),
    iv: bytesToBase64(iv),
    ciphertext: bytesToBase64(ciphertext),
    updatedAt: new Date().toISOString()
  };
}

async function decryptVault(encryptedVault, passphrase) {
  if (!encryptedVault) return defaultVault();
  if (!passphrase) throw new Error("缺少资料口令");
  const salt = base64ToBytes(encryptedVault.salt);
  const iv = base64ToBytes(encryptedVault.iv);
  const ciphertext = base64ToBytes(encryptedVault.ciphertext);
  const key = await deriveVaultKey(passphrase, salt, encryptedVault.iterations || 210000);
  const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return {
    ...defaultVault(),
    ...JSON.parse(new TextDecoder().decode(plaintext))
  };
}

async function persistVault({ push = true } = {}) {
  if (!decryptedVault) throw new Error("资料库未解锁");
  decryptedVault.updatedAt = new Date().toISOString();
  appState.vault = await encryptVault(decryptedVault, vaultPassphrase);
  updateVaultMeta();
  saveLocalRecord();
  renderAll();
  if (push) scheduleRemotePush();
}

async function unlockVault(passphrase) {
  vaultPassphrase = passphrase;
  decryptedVault = await decryptVault(appState.vault, passphrase);
  sessionStorage.setItem(vaultSessionKey, "1");
  updateVaultMeta();
  saveLocalRecord();
  setVaultStatus("资料库已解锁", "ok");
  renderAll();
}

function lockVault() {
  decryptedVault = null;
  vaultPassphrase = "";
  sessionStorage.removeItem(vaultSessionKey);
  updateVaultMeta();
  saveLocalRecord();
  setVaultStatus("资料库已锁定", "neutral");
  renderAll();
}

async function ensureVaultInitialized() {
  if (!appState.vault && vaultPassphrase && !decryptedVault) {
    decryptedVault = defaultVault();
    await persistVault({ push: false });
  }
}

function encodePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

async function requestCloudflare(path, options = {}) {
  const token = getToken();
  if (!token) throw new Error("缺少同步令牌");
  const headers = { "Content-Type": "application/json", "X-Sync-Token": token, ...(options.headers || {}) };
  const response = await fetch(`${getApiBase()}${path}`, { ...options, headers });
  if (!response.ok) throw new Error((await response.text()) || `HTTP ${response.status}`);
  return response.json();
}

function githubHeaders() {
  const token = getToken();
  if (!token) throw new Error("缺少 GitHub Token");
  return {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
}

function githubContentUrl() {
  const { owner, repo, branch, path } = getGithubConfig();
  if (!owner || !repo || !path) throw new Error("缺少 GitHub Owner/Repo/Path");
  const url = new URL(`https://api.github.com/repos/${owner}/${repo}/contents/${encodePath(path)}`);
  url.searchParams.set("ref", branch || "main");
  return url.toString();
}

async function fetchGithubProgress({ allowMissing = false } = {}) {
  const response = await fetch(githubContentUrl(), { method: "GET", headers: githubHeaders() });
  if (response.status === 404 && allowMissing) return null;
  if (!response.ok) throw new Error((await response.text()) || `GitHub HTTP ${response.status}`);
  const data = await response.json();
  const record = JSON.parse(base64ToText(data.content || ""));
  return { record, sha: data.sha };
}

async function putGithubProgress(payload) {
  const { branch } = getGithubConfig();
  const existing = await fetchGithubProgress({ allowMissing: true });
  const record = { ...payload, source: payload.source || "web-github", updatedAt: new Date().toISOString() };
  const body = {
    message: `Update career os ${record.updatedAt}`,
    content: textToBase64(`${JSON.stringify(record, null, 2)}\n`),
    branch: branch || "main"
  };
  if (existing?.sha) body.sha = existing.sha;
  const response = await fetch(githubContentUrl().replace(/\?ref=.*/, ""), {
    method: "PUT",
    headers: githubHeaders(),
    body: JSON.stringify(body)
  });
  if (response.status === 409) throw new Error("云端进度已变化，请先拉取后再同步");
  if (!response.ok) throw new Error((await response.text()) || `GitHub HTTP ${response.status}`);
  await response.json();
  return record;
}

async function fetchRemoteProgress() {
  if (getProvider() === "github") {
    const data = await fetchGithubProgress({ allowMissing: true });
    return data?.record || null;
  }
  return requestCloudflare(`/api/progress?user=${encodeURIComponent(getUserId())}`, { method: "GET" });
}

async function putRemoteProgress(payload) {
  if (getProvider() === "github") return putGithubProgress(payload);
  return requestCloudflare(`/api/progress?user=${encodeURIComponent(getUserId())}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

function buildRemotePayload(source = "web") {
  return {
    ...appState,
    schemaVersion: 2,
    source,
    userId: getUserId(),
    clientUpdatedAt: new Date().toISOString(),
    overall: getAllStats(),
    progress
  };
}

async function pullRemoteProgress() {
  setSyncStatus("正在拉取云端进度...");
  const data = await fetchRemoteProgress();
  if (data) {
    appState = migrateRecord(data);
    progress = appState.progress;
    saveLocalRecord();
    if (vaultPassphrase) {
      try {
        decryptedVault = await decryptVault(appState.vault, vaultPassphrase);
        updateVaultMeta();
      } catch {
        decryptedVault = null;
        setVaultStatus("资料口令不匹配，资料库已锁定", "error");
      }
    }
    renderAll();
    setSyncStatus(`已拉取云端进度：${appState.updatedAt || "无更新时间"}`, "ok");
    return;
  }
  setSyncStatus("云端暂无进度，保留本地状态", "neutral");
}

async function pushRemoteProgress(source = "web") {
  setSyncStatus("正在同步到云端...");
  if (decryptedVault && vaultPassphrase) await persistVault({ push: false });
  const data = await putRemoteProgress(buildRemotePayload(source));
  appState = migrateRecord(data);
  progress = appState.progress;
  saveLocalRecord();
  setSyncStatus(`已同步：${appState.updatedAt}`, "ok");
}

function scheduleRemotePush() {
  saveLocalRecord();
  if (!getToken()) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushRemoteProgress("web-auto").catch((error) => setSyncStatus(`自动同步失败：${error.message}`, "error"));
  }, 850);
}

function matchScore(job) {
  const text = `${job.title || ""} ${job.company || ""} ${job.city || ""} ${job.description || ""}`.toLowerCase();
  const scoreParts = [
    /服饰|电商|跨境|商品|审核/.test(text) ? 22 : 0,
    /ai|人工智能|大模型|agent|智能|算法/.test(text) ? 24 : 0,
    /供应链|质检|质量|风控|品控/.test(text) ? 22 : 0,
    /上海|杭州|北京/.test(text) ? 12 : 0,
    /产品|需求|prd|流程|数据|指标/.test(text) ? 20 : 0
  ];
  return Math.min(100, scoreParts.reduce((sum, item) => sum + item, 0));
}

function jobRecommendation(job) {
  const score = job.matchScore ?? matchScore(job);
  if (score >= 85) return "高优先投递";
  if (score >= 70) return "可投递，需定制简历";
  if (score >= 50) return "保留观察";
  return "暂不优先";
}

async function runAiAction(kind, input) {
  if (!aiConfig.apiKey || !aiConfig.baseUrl || !aiConfig.model) throw new Error("请先配置 AI baseURL、model 和 apiKey");
  const prompts = {
    task: "你是AI产品经理求职教练。请审核该任务详情，输出：1. 缺少的信息；2. 可面试表达；3. 下一步行动；4. 简历bullet建议。",
    fragment: "你是AI产品经理简历教练。请把碎片经历改写为STAR素材，输出可量化动作、AI产品化角度、简历bullet。",
    job: "你是JD匹配分析师。请结合候选人背景：跨境服饰电商品控主管、供应商管理、质检抽检、AI审单/Dify/图像识别。输出匹配度、风险、简历关键词、投递建议。",
    interview: "你是AI产品经理面试教练。请根据逐字稿输出：表现总结、追问点、回答漏洞、优化版回答、下一次准备清单。",
    test: "你是连接测试助手。请只回复一句中文：AI连接正常。"
  };
  const provider = inferAiProvider(aiConfig);
  const apiStyle = aiConfig.apiStyle || aiPreset(provider).apiStyle || "openai";
  const prompt = prompts[kind] || prompts.task;
  if (apiStyle === "anthropic") return runAnthropicCompatibleAction(prompt, input);
  return runOpenAiCompatibleAction(prompt, input);
}

async function runOpenAiCompatibleAction(systemPrompt, input) {
  const response = await fetch(`${aiConfig.baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${aiConfig.apiKey}`
    },
    body: JSON.stringify({
      model: aiConfig.model,
      temperature: 0.3,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: input }
      ]
    })
  });
  if (!response.ok) throw new Error((await response.text()) || `AI HTTP ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "AI 未返回内容";
}

async function runAnthropicCompatibleAction(systemPrompt, input) {
  const response = await fetch(`${aiConfig.baseUrl.replace(/\/$/, "")}/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": aiConfig.apiKey,
      "Authorization": `Bearer ${aiConfig.apiKey}`,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: aiConfig.model,
      max_tokens: 1800,
      temperature: 0.3,
      system: systemPrompt,
      messages: [
        { role: "user", content: input }
      ]
    })
  });
  if (!response.ok) throw new Error((await response.text()) || `AI HTTP ${response.status}`);
  const data = await response.json();
  const text = data.content
    ?.map((block) => typeof block === "string" ? block : block?.text || "")
    .filter(Boolean)
    .join("\n")
    .trim();
  return text || data.choices?.[0]?.message?.content || "AI 未返回内容";
}

function formatAiError(error) {
  const message = error?.message || String(error);
  if (/Failed to fetch|NetworkError|Load failed/i.test(message)) {
    return "请求未到达模型服务，可能是网络、代理或浏览器跨域限制。可以先确认浏览器能访问方舟 endpoint，或改用支持 CORS 的代理网关。";
  }
  return message;
}

async function testAiConnection() {
  try {
    aiConfig = collectAiConfigFromFields();
    saveAiConfig();
    renderAiPanel();
    setAiStatus(`正在测试 ${aiPreset(aiConfig.provider).label}...`, "neutral");
    const result = await runAiAction("test", "请回复：AI连接正常。");
    setAiStatus(`测试成功：${result.slice(0, 80)}`, "ok");
  } catch (error) {
    setAiStatus(`测试失败：${formatAiError(error)}`, "error");
  }
}

function renderMetrics() {
  const all = getAllStats();
  const vault = getVault();
  const metrics = [
    ["总体完成", all.percent, "%"],
    ["已完成任务", all.done, `/${all.total}`],
    ["经历/知识", vault?.fragments?.length || 0, "条"],
    ["岗位/JD", vault?.jobs?.length || 0, "个"]
  ];
  document.querySelector("#metricsGrid").innerHTML = metrics
    .map(([label, value, unit]) => `<article class="metric-card"><span>${label}</span><div class="metric-value">${value}<small>${unit}</small></div></article>`)
    .join("");
  document.querySelector("#overallBadge").textContent = all.percent === 100 ? "已完成" : `完成 ${all.percent}%`;
}

function renderMap() {
  document.querySelector("#mapRail").innerHTML = workflows
    .map((workflow, index) => {
      const stats = getWorkflowStats(workflow);
      return `
        <article class="map-node">
          <div class="node-index">${index + 1}</div>
          <div class="node-title">${escapeHtml(workflow.title)}</div>
          <div class="node-copy">${escapeHtml(workflow.summary)}</div>
          <div class="progress-track" aria-label="${escapeHtml(workflow.title)}进度"><div class="progress-fill" style="--progress: ${stats.percent}%"></div></div>
          <div class="progress-row"><span>${stats.done}/${stats.total}</span><span>${escapeHtml(workflow.week)}</span></div>
        </article>`;
    })
    .join("");
}

function taskMarkup(workflow, index, compact = false) {
  const key = taskKey(workflow.id, index);
  const checked = Boolean(progress[key]);
  const detail = decryptedVault?.taskDetails?.[key];
  const hasDetail = detail && Object.values(detail).some(Boolean);
  return `
    <article class="task-item ${checked ? "is-done" : ""}" data-task-card="${escapeHtml(key)}">
      <input type="checkbox" data-workflow="${escapeHtml(workflow.id)}" data-index="${index}" ${checked ? "checked" : ""} aria-label="${escapeHtml(workflow.tasks[index])}" />
      <button class="task-open-button" type="button" data-open-task="${escapeHtml(key)}">
        <span class="task-title">${escapeHtml(workflow.tasks[index])}</span>
        <span class="task-meta">${escapeHtml(workflow.title)} · ${escapeHtml(workflow.week)}${hasDetail ? " · 已有详情" : ""}</span>
      </button>
      <span class="task-tag">${checked ? "完成" : compact ? "本周" : "待办"}</span>
    </article>`;
}

function lockedMarkup(title = "资料库已锁定") {
  return `
    <div class="empty locked-panel">
      <strong>${escapeHtml(title)}</strong>
      <span>输入资料口令后，可以查看和编辑任务详情、经历素材、JD、投递和面试逐字稿。GitHub 只保存密文。</span>
    </div>`;
}

function renderWeekOne() {
  const weekOneTasks = workflows.slice(0, 2).flatMap((workflow) => workflow.tasks.map((_, index) => taskMarkup(workflow, index, true))).slice(0, 8);
  document.querySelector("#weekOneList").innerHTML = weekOneTasks.join("");
}

function renderWorkflows() {
  document.querySelector("#workflowGrid").innerHTML = workflows
    .map((workflow) => {
      const stats = getWorkflowStats(workflow);
      return `
        <article class="workflow-card">
          <div class="workflow-card-header">
            <div><p class="eyebrow">${escapeHtml(workflow.week)}</p><h3>${escapeHtml(workflow.title)}</h3></div>
            <span class="status-badge">${stats.percent}%</span>
          </div>
          <p>${escapeHtml(workflow.summary)}</p>
          <div class="deliverable-list">${workflow.deliverables.map((item) => `<span class="deliverable">${escapeHtml(item)}</span>`).join("")}</div>
          <div class="progress-track"><div class="progress-fill" style="--progress: ${stats.percent}%"></div></div>
          <div class="progress-row"><span>${stats.done}/${stats.total} 已完成</span><span>${stats.percent === 100 ? "可验收" : "推进中"}</span></div>
          <div class="task-list">${workflow.tasks.map((_, index) => taskMarkup(workflow, index)).join("")}</div>
        </article>`;
    })
    .join("");
}

function renderToday() {
  const pending = workflows.flatMap((workflow) =>
    workflow.tasks.map((_, index) => ({ workflow, index, key: taskKey(workflow.id, index) })).filter((item) => !progress[item.key])
  );
  const today = pending.slice(0, 8);
  document.querySelector("#todayCount").textContent = `${today.length}项`;
  document.querySelector("#todayList").innerHTML = today.length === 0 ? `<div class="empty">所有任务都已完成。可以导出进度，或新增下一轮工作流。</div>` : today.map((item) => taskMarkup(item.workflow, item.index)).join("");
}

function renderPortfolio() {
  document.querySelector("#portfolioGrid").innerHTML = portfolioItems
    .map((item, index) => `
      <article class="portfolio-card ${index === 0 ? "primary" : ""}">
        <div class="portfolio-header"><div><p class="eyebrow">${escapeHtml(item.type)}</p><h3>${escapeHtml(item.title)}</h3></div><span class="status-badge">${escapeHtml(item.status)}</span></div>
        <p>${escapeHtml(item.copy)}</p>
        <div class="portfolio-meta">${item.stats.map(([label, value]) => `<div class="mini-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}</div>
      </article>`)
    .join("");
}

function renderFragments() {
  const target = document.querySelector("#fragmentsView");
  if (!target) return;
  const vault = getVault();
  if (!vault) {
    target.innerHTML = lockedMarkup("知识/经历库已锁定");
    return;
  }
  target.innerHTML = `
    <section class="os-layout">
      <form class="os-panel" id="fragmentForm">
        <div class="panel-heading"><h3>快速捕捉</h3><span>碎片 -> 素材</span></div>
        <div class="form-grid">
          <label>类型<select name="type" class="text-field"><option>工作经历</option><option>课程笔记</option><option>业务洞察</option><option>作品灵感</option><option>面试素材</option></select></label>
          <label>敏感级别<select name="sensitivity" class="text-field"><option>脱敏可用</option><option>需二次脱敏</option><option>仅本地参考</option></select></label>
          <label>标题<input name="title" class="text-field" placeholder="例如：AI审单流程拆解"></label>
          <label>标签<input name="tags" class="text-field" placeholder="AI审单,质检,Dify"></label>
          <label>关联任务<select name="taskKey" class="text-field"><option value="">不关联</option>${allTaskOptions()}</select></label>
        </div>
        <label>内容<textarea name="content" class="large-field" placeholder="把碎片化知识、经历、课程笔记、工作案例直接写进来"></textarea></label>
        <div class="button-row"><button class="small-button" type="submit">保存素材</button></div>
      </form>
      <section class="os-panel">
        <div class="panel-heading"><h3>素材库</h3><span>${vault.fragments.length}条</span></div>
        <div class="record-list">${vault.fragments.length ? vault.fragments.map(fragmentCard).join("") : `<div class="empty">暂无素材。先从左侧快速捕捉一条。</div>`}</div>
      </section>
    </section>`;
}

function fragmentCard(item) {
  return `
    <article class="record-card">
      <div class="record-head"><div><p class="eyebrow">${escapeHtml(item.type)} · ${escapeHtml(item.sensitivity)}</p><h3>${escapeHtml(item.title || "未命名素材")}</h3></div><button class="icon-text-button" data-ai-fragment="${escapeHtml(item.id)}" type="button">AI改写</button></div>
      <p>${escapeHtml((item.content || "").slice(0, 220))}${(item.content || "").length > 220 ? "..." : ""}</p>
      <div class="deliverable-list">${(item.tags || []).map((tag) => `<span class="deliverable">${escapeHtml(tag)}</span>`).join("")}</div>
      ${item.aiAdvice ? `<div class="ai-box">${escapeHtml(item.aiAdvice)}</div>` : ""}
    </article>`;
}

function renderJobs() {
  const target = document.querySelector("#jobsView");
  if (!target) return;
  const vault = getVault();
  if (!vault) {
    target.innerHTML = lockedMarkup("岗位库已锁定");
    return;
  }
  target.innerHTML = `
    <section class="role-strip">${targetRoles.map((role) => `
      <article class="role-card">
        <div class="record-head"><div><p class="eyebrow">${escapeHtml(role.city)}</p><h3>${escapeHtml(role.title)}</h3></div><span class="status-badge">${role.fit}%</span></div>
        <p>${escapeHtml(role.reason)}</p>
        <div class="deliverable-list">${role.keywords.map((item) => `<span class="deliverable">${escapeHtml(item)}</span>`).join("")}</div>
      </article>`).join("")}</section>
    <section class="os-layout">
      <form class="os-panel" id="jobForm">
        <div class="panel-heading"><h3>JD导入</h3><span>人工粘贴/浏览器辅助</span></div>
        <div class="form-grid">
          <label>公司<input name="company" class="text-field"></label>
          <label>岗位<input name="title" class="text-field"></label>
          <label>城市<select name="city" class="text-field"><option>上海</option><option>杭州</option><option>北京</option><option>远程/其他</option></select></label>
          <label>薪资<input name="salary" class="text-field" placeholder="22k-30k"></label>
          <label>来源<input name="source" class="text-field" placeholder="Boss/猎聘/官网/链接"></label>
        </div>
        <label>JD正文<textarea name="description" class="large-field" placeholder="粘贴JD全文，系统会计算匹配度"></textarea></label>
        <div class="button-row"><button class="small-button" type="submit">保存JD</button></div>
      </form>
      <section class="os-panel">
        <div class="panel-heading"><h3>JD库</h3><span>${vault.jobs.length}个</span></div>
        <div class="record-list">${vault.jobs.length ? vault.jobs.map(jobCard).join("") : `<div class="empty">暂无JD。先粘贴一个在招岗位。</div>`}</div>
      </section>
    </section>`;
}

function jobCard(job) {
  const score = job.matchScore ?? matchScore(job);
  return `
    <article class="record-card">
      <div class="record-head"><div><p class="eyebrow">${escapeHtml(job.company)} · ${escapeHtml(job.city)}</p><h3>${escapeHtml(job.title || "未命名岗位")}</h3></div><span class="status-badge">${score}%</span></div>
      <p>${escapeHtml(jobRecommendation({ ...job, matchScore: score }))} · ${escapeHtml(job.salary || "薪资未填")} · ${escapeHtml(job.source || "来源未填")}</p>
      <div class="button-row"><button class="icon-text-button" data-ai-job="${escapeHtml(job.id)}" type="button">AI匹配分析</button><button class="icon-text-button" data-apply-job="${escapeHtml(job.id)}" type="button">加入投递</button></div>
      ${job.aiAdvice ? `<div class="ai-box">${escapeHtml(job.aiAdvice)}</div>` : ""}
    </article>`;
}

function renderApplications() {
  const target = document.querySelector("#applicationsView");
  if (!target) return;
  const vault = getVault();
  if (!vault) {
    target.innerHTML = lockedMarkup("投递表已锁定");
    return;
  }
  const jobOptions = vault.jobs.map((job) => `<option value="${escapeHtml(job.id)}">${escapeHtml(job.company)} / ${escapeHtml(job.title)}</option>`).join("");
  target.innerHTML = `
    <section class="os-layout">
      <form class="os-panel" id="applicationForm">
        <div class="panel-heading"><h3>新增投递</h3><span>CRM</span></div>
        <div class="form-grid">
          <label>关联JD<select name="jobId" class="text-field"><option value="">手动填写</option>${jobOptions}</select></label>
          <label>状态<select name="status" class="text-field">${["收藏", "已投递", "HR沟通", "笔试", "一面", "二面", "Offer", "拒绝", "暂停"].map((item) => `<option>${item}</option>`).join("")}</select></label>
          <label>公司<input name="company" class="text-field"></label>
          <label>岗位<input name="title" class="text-field"></label>
          <label>城市<input name="city" class="text-field"></label>
          <label>渠道<input name="channel" class="text-field" placeholder="Boss/猎头/内推"></label>
          <label>简历版本<input name="resumeVersion" class="text-field" placeholder="电商AI版"></label>
          <label>下一步<input name="nextStep" class="text-field"></label>
        </div>
        <label>复盘<textarea name="review" class="large-field"></textarea></label>
        <div class="button-row"><button class="small-button" type="submit">保存投递</button></div>
      </form>
      <section class="os-panel">
        <div class="panel-heading"><h3>投递跟踪</h3><span>${vault.applications.length}条</span></div>
        <div class="record-list">${vault.applications.length ? vault.applications.map(applicationCard).join("") : `<div class="empty">暂无投递记录。</div>`}</div>
      </section>
    </section>`;
}

function applicationCard(app) {
  return `
    <article class="record-card">
      <div class="record-head"><div><p class="eyebrow">${escapeHtml(app.status)} · ${escapeHtml(app.city || "城市未填")}</p><h3>${escapeHtml(app.company || "未填公司")} / ${escapeHtml(app.title || "未填岗位")}</h3></div><span class="status-badge">${escapeHtml(app.resumeVersion || "简历未填")}</span></div>
      <p>渠道：${escapeHtml(app.channel || "未填")} · 下一步：${escapeHtml(app.nextStep || "未填")}</p>
      ${app.review ? `<div class="ai-box">${escapeHtml(app.review)}</div>` : ""}
    </article>`;
}

function renderInterviews() {
  const target = document.querySelector("#interviewsView");
  if (!target) return;
  const vault = getVault();
  if (!vault) {
    target.innerHTML = lockedMarkup("面试库已锁定");
    return;
  }
  const applicationOptions = vault.applications.map((app) => `<option value="${escapeHtml(app.id)}">${escapeHtml(app.company)} / ${escapeHtml(app.title)}</option>`).join("");
  target.innerHTML = `
    <section class="os-layout">
      <form class="os-panel" id="interviewForm">
        <div class="panel-heading"><h3>面试逐字稿</h3><span>录音只登记，不上云</span></div>
        <div class="form-grid">
          <label>关联投递<select name="applicationId" class="text-field"><option value="">不关联</option>${applicationOptions}</select></label>
          <label>轮次<select name="round" class="text-field"><option>模拟面试</option><option>HR面</option><option>一面</option><option>二面</option><option>终面</option></select></label>
          <label>录音文件<input name="audio" class="text-field" type="file" accept="audio/*"></label>
          <label>录音备注<input name="audioNote" class="text-field" placeholder="原文件只留本机"></label>
        </div>
        <label>逐字稿<textarea name="transcript" class="large-field transcript-field" placeholder="粘贴转写后的逐字稿"></textarea></label>
        <div class="button-row"><button class="small-button" type="submit">保存面试</button></div>
      </form>
      <section class="os-panel">
        <div class="panel-heading"><h3>面试复盘</h3><span>${vault.interviews.length}条</span></div>
        <div class="record-list">${vault.interviews.length ? vault.interviews.map(interviewCard).join("") : `<div class="empty">暂无面试逐字稿。</div>`}</div>
      </section>
    </section>`;
}

function interviewCard(interview) {
  const app = decryptedVault?.applications?.find((item) => item.id === interview.applicationId);
  return `
    <article class="record-card">
      <div class="record-head"><div><p class="eyebrow">${escapeHtml(interview.round)} · ${escapeHtml(app?.company || "未关联投递")}</p><h3>${escapeHtml(interview.audioName || "逐字稿记录")}</h3></div><button class="icon-text-button" data-ai-interview="${escapeHtml(interview.id)}" type="button">AI复盘</button></div>
      <p>${escapeHtml((interview.transcript || "").slice(0, 220))}${(interview.transcript || "").length > 220 ? "..." : ""}</p>
      ${interview.aiAdvice ? `<div class="ai-box">${escapeHtml(interview.aiAdvice)}</div>` : ""}
    </article>`;
}

function renderDateLine() {
  const dateLine = document.querySelector("#dateLine");
  if (!dateLine) return;
  const today = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()).replaceAll("/", "-");
  dateLine.textContent = `${today} / 30天冲刺`;
}

function renderVaultPanel() {
  const status = decryptedVault ? `已解锁 · ${Object.values(vaultCounts(decryptedVault)).reduce((sum, item) => sum + item, 0)}项资料` : appState.vault ? "已加密上云，输入口令解锁" : "尚未初始化资料库";
  const passInput = document.querySelector("#vaultPassphraseInput");
  if (passInput && vaultPassphrase && !passInput.value) passInput.value = vaultPassphrase;
  setVaultStatus(status, decryptedVault ? "ok" : "neutral");
}

function renderAiPanel() {
  const provider = document.querySelector("#aiProviderSelect");
  const base = document.querySelector("#aiBaseUrlInput");
  const model = document.querySelector("#aiModelInput");
  const key = document.querySelector("#aiApiKeyInput");
  const providerValue = inferAiProvider(aiConfig);
  const preset = aiPreset(providerValue);
  if (provider) provider.value = providerValue;
  if (base) base.value = aiConfig.baseUrl || preset.baseUrl || "";
  if (model) model.value = aiConfig.model || preset.model || "";
  if (key) key.value = aiConfig.apiKey || "";
  applyAiPresetToFields(providerValue, false);
  setAiStatus(aiConfig.apiKey ? `AI配置已保存：${preset.label}` : `待填写API Key：${preset.label}`, aiConfig.apiKey ? "ok" : "neutral");
}

function renderAll() {
  renderMetrics();
  renderMap();
  renderWeekOne();
  renderWorkflows();
  renderToday();
  renderPortfolio();
  renderFragments();
  renderJobs();
  renderApplications();
  renderInterviews();
  renderVaultPanel();
  bindTaskEvents();
}

function bindTaskEvents() {
  document.querySelectorAll('input[type="checkbox"][data-workflow]').forEach((input) => {
    input.addEventListener("change", (event) => {
      const workflowId = event.target.dataset.workflow;
      const index = Number(event.target.dataset.index);
      progress[taskKey(workflowId, index)] = event.target.checked;
      scheduleRemotePush();
      renderAll();
    });
  });
}

function showView(view) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === view));
  Object.entries(views).forEach(([key, section]) => section.classList.toggle("is-visible", key === view));
  const title = document.querySelector("#viewTitle");
  if (title) title.textContent = viewTitles[view] || "总览";
}

function taskDrawerMarkup(key) {
  const { workflow, title } = getTaskMeta(key);
  const detail = decryptedVault?.taskDetails?.[key] || {};
  if (!decryptedVault) {
    return `<div class="drawer-card">${lockedMarkup("任务详情已锁定")}</div>`;
  }
  return `
    <form id="taskDetailForm" class="drawer-card" data-task-key="${escapeHtml(key)}">
      <p class="eyebrow">${escapeHtml(workflow?.title || "任务")} · ${escapeHtml(workflow?.week || "")}</p>
      <h3>${escapeHtml(title)}</h3>
      <label>详情/备注<textarea name="notes" class="large-field">${escapeHtml(detail.notes || "")}</textarea></label>
      <label>完成标准<textarea name="acceptance" class="large-field">${escapeHtml(detail.acceptance || "")}</textarea></label>
      <label>证据/链接<textarea name="evidence" class="large-field">${escapeHtml(detail.evidence || "")}</textarea></label>
      <label>AI建议<textarea name="aiAdvice" class="large-field">${escapeHtml(detail.aiAdvice || "")}</textarea></label>
      <div class="button-row"><button class="small-button" type="submit">保存详情</button><button class="small-button secondary" type="button" id="taskAiButton">AI审核</button></div>
    </form>`;
}

function openTaskDrawer(key) {
  activeTaskKey = key;
  const drawer = document.querySelector("#taskDrawer");
  if (!drawer) return;
  drawer.querySelector(".drawer-body").innerHTML = taskDrawerMarkup(key);
  drawer.classList.add("is-open");
}

function closeTaskDrawer() {
  document.querySelector("#taskDrawer")?.classList.remove("is-open");
}

function hydrateSyncFields() {
  const providerSelect = document.querySelector("#syncProviderSelect");
  const apiInput = document.querySelector("#apiBaseInput");
  const userInput = document.querySelector("#userIdInput");
  const tokenInput = document.querySelector("#syncTokenInput");
  const githubOwnerInput = document.querySelector("#githubOwnerInput");
  const githubRepoInput = document.querySelector("#githubRepoInput");
  const githubBranchInput = document.querySelector("#githubBranchInput");
  const githubPathInput = document.querySelector("#githubPathInput");
  const githubConfig = getGithubConfig();
  if (providerSelect) providerSelect.value = getProvider();
  if (apiInput) apiInput.value = remoteConfig.apiBase || "";
  if (userInput) userInput.value = getUserId();
  if (tokenInput) tokenInput.value = getToken();
  if (githubOwnerInput) githubOwnerInput.value = githubConfig.owner;
  if (githubRepoInput) githubRepoInput.value = githubConfig.repo;
  if (githubBranchInput) githubBranchInput.value = githubConfig.branch;
  if (githubPathInput) githubPathInput.value = githubConfig.path;
  updateProviderFields();
  setSyncStatus(getToken() ? "已保存同步配置" : "未连接云端");
}

function updateProviderFields() {
  const provider = document.querySelector("#syncProviderSelect")?.value || getProvider();
  document.querySelectorAll("[data-provider-fields]").forEach((element) => {
    element.classList.toggle("is-hidden", element.dataset.providerFields !== provider);
  });
}

function installEventHandlers() {
  document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
  document.querySelector("#resetButton").addEventListener("click", () => {
    if (!confirm("确认重置所有工作流进度？资料库不会被删除。")) return;
    progress = {};
    scheduleRemotePush();
    renderAll();
  });
  document.querySelector("#saveConfigButton").addEventListener("click", () => {
    remoteConfig = {
      ...remoteConfig,
      provider: document.querySelector("#syncProviderSelect").value,
      apiBase: document.querySelector("#apiBaseInput").value.trim(),
      userId: document.querySelector("#userIdInput").value.trim() || "default",
      token: document.querySelector("#syncTokenInput").value.trim(),
      githubOwner: document.querySelector("#githubOwnerInput").value.trim(),
      githubRepo: document.querySelector("#githubRepoInput").value.trim(),
      githubBranch: document.querySelector("#githubBranchInput").value.trim() || "main",
      githubPath: document.querySelector("#githubPathInput").value.trim() || "progress/default.json"
    };
    saveRemoteConfig();
    hydrateSyncFields();
  });
  document.querySelector("#syncProviderSelect").addEventListener("change", updateProviderFields);
  document.querySelector("#pullRemoteButton").addEventListener("click", () => pullRemoteProgress().catch((error) => setSyncStatus(`拉取失败：${error.message}`, "error")));
  document.querySelector("#pushRemoteButton").addEventListener("click", () => pushRemoteProgress("web-manual").catch((error) => setSyncStatus(`同步失败：${error.message}`, "error")));
  document.querySelector("#exportButton").addEventListener("click", exportRecord);
  document.querySelector("#unlockVaultButton")?.addEventListener("click", async () => {
    try {
      const passphrase = document.querySelector("#vaultPassphraseInput").value;
      await unlockVault(passphrase);
      await ensureVaultInitialized();
    } catch (error) {
      setVaultStatus(`解锁失败：${error.message}`, "error");
    }
  });
  document.querySelector("#lockVaultButton")?.addEventListener("click", lockVault);
  document.querySelector("#saveAiConfigButton")?.addEventListener("click", () => {
    aiConfig = collectAiConfigFromFields();
    saveAiConfig();
    renderAiPanel();
  });
  document.querySelector("#testAiConfigButton")?.addEventListener("click", testAiConnection);
  document.querySelector("#aiProviderSelect")?.addEventListener("change", (event) => {
    applyAiPresetToFields(event.target.value, true);
    setAiStatus(`已应用${aiPreset(event.target.value).label}预设，保存后生效`, "neutral");
  });
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("submit", handleDocumentSubmit);
  document.addEventListener("change", handleDocumentChange);
}

function exportRecord() {
  const blob = new Blob([JSON.stringify(buildRemotePayload("web-export"), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "career-os-record.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function handleDocumentClick(event) {
  const openTask = event.target.closest("[data-open-task]");
  if (openTask) {
    openTaskDrawer(openTask.dataset.openTask);
    return;
  }
  if (event.target.closest("[data-close-drawer]")) {
    closeTaskDrawer();
    return;
  }
  const aiFragment = event.target.closest("[data-ai-fragment]");
  if (aiFragment) await aiForFragment(aiFragment.dataset.aiFragment);
  const aiJob = event.target.closest("[data-ai-job]");
  if (aiJob) await aiForJob(aiJob.dataset.aiJob);
  const applyJob = event.target.closest("[data-apply-job]");
  if (applyJob) await createApplicationFromJob(applyJob.dataset.applyJob);
  const aiInterview = event.target.closest("[data-ai-interview]");
  if (aiInterview) await aiForInterview(aiInterview.dataset.aiInterview);
  if (event.target.id === "taskAiButton") await aiForTask(activeTaskKey);
}

async function handleDocumentSubmit(event) {
  const form = event.target;
  if (form.id === "taskDetailForm") {
    event.preventDefault();
    await saveTaskDetail(form);
  }
  if (form.id === "fragmentForm") {
    event.preventDefault();
    await saveFragment(form);
  }
  if (form.id === "jobForm") {
    event.preventDefault();
    await saveJob(form);
  }
  if (form.id === "applicationForm") {
    event.preventDefault();
    await saveApplication(form);
  }
  if (form.id === "interviewForm") {
    event.preventDefault();
    await saveInterview(form);
  }
}

function handleDocumentChange(event) {
  const jobSelect = event.target.closest("#applicationForm select[name='jobId']");
  if (jobSelect && decryptedVault) {
    const job = decryptedVault.jobs.find((item) => item.id === jobSelect.value);
    const form = jobSelect.form;
    if (job && form) {
      form.company.value = job.company || "";
      form.title.value = job.title || "";
      form.city.value = job.city || "";
    }
  }
}

async function saveTaskDetail(form) {
  const vault = requireVault();
  const key = form.dataset.taskKey;
  vault.taskDetails[key] = {
    notes: form.notes.value.trim(),
    acceptance: form.acceptance.value.trim(),
    evidence: form.evidence.value.trim(),
    aiAdvice: form.aiAdvice.value.trim(),
    updatedAt: new Date().toISOString()
  };
  await persistVault();
  openTaskDrawer(key);
}

async function saveFragment(form) {
  const vault = requireVault();
  vault.fragments.unshift({
    id: uid("fragment"),
    type: form.type.value,
    sensitivity: form.sensitivity.value,
    title: form.title.value.trim(),
    tags: form.tags.value.split(",").map((tag) => tag.trim()).filter(Boolean),
    taskKey: form.taskKey.value,
    content: form.content.value.trim(),
    createdAt: new Date().toISOString()
  });
  form.reset();
  await persistVault();
}

async function saveJob(form) {
  const vault = requireVault();
  const job = {
    id: uid("job"),
    company: form.company.value.trim(),
    title: form.title.value.trim(),
    city: form.city.value,
    salary: form.salary.value.trim(),
    source: form.source.value.trim(),
    description: form.description.value.trim(),
    createdAt: new Date().toISOString()
  };
  job.matchScore = matchScore(job);
  vault.jobs.unshift(job);
  form.reset();
  await persistVault();
}

async function saveApplication(form) {
  const vault = requireVault();
  vault.applications.unshift({
    id: uid("app"),
    jobId: form.jobId.value,
    status: form.status.value,
    company: form.company.value.trim(),
    title: form.title.value.trim(),
    city: form.city.value.trim(),
    channel: form.channel.value.trim(),
    resumeVersion: form.resumeVersion.value.trim(),
    nextStep: form.nextStep.value.trim(),
    review: form.review.value.trim(),
    createdAt: new Date().toISOString()
  });
  form.reset();
  await persistVault();
}

async function saveInterview(form) {
  const vault = requireVault();
  const file = form.audio.files?.[0];
  vault.interviews.unshift({
    id: uid("interview"),
    applicationId: form.applicationId.value,
    round: form.round.value,
    audioName: file?.name || "",
    audioSize: file?.size || 0,
    audioType: file?.type || "",
    audioNote: form.audioNote.value.trim(),
    transcript: form.transcript.value.trim(),
    createdAt: new Date().toISOString()
  });
  form.reset();
  await persistVault();
}

async function createApplicationFromJob(jobId) {
  const vault = requireVault();
  const job = vault.jobs.find((item) => item.id === jobId);
  if (!job) return;
  vault.applications.unshift({
    id: uid("app"),
    jobId,
    status: "收藏",
    company: job.company,
    title: job.title,
    city: job.city,
    channel: job.source,
    resumeVersion: job.matchScore >= 85 ? "电商/供应链AI版" : "待定制",
    nextStep: "定制简历后投递",
    review: jobRecommendation(job),
    createdAt: new Date().toISOString()
  });
  await persistVault();
  showView("applications");
}

async function aiForTask(key) {
  try {
    const vault = requireVault();
    const meta = getTaskMeta(key);
    const detail = vault.taskDetails[key] || {};
    setAiStatus("AI正在审核任务...", "neutral");
    const advice = await runAiAction("task", JSON.stringify({ task: meta.title, workflow: meta.workflow?.title, detail }, null, 2));
    vault.taskDetails[key] = { ...detail, aiAdvice: advice, updatedAt: new Date().toISOString() };
    await persistVault();
    openTaskDrawer(key);
    setAiStatus("AI任务审核已保存", "ok");
  } catch (error) {
    setAiStatus(`AI失败：${formatAiError(error)}`, "error");
  }
}

async function aiForFragment(id) {
  try {
    const vault = requireVault();
    const item = vault.fragments.find((fragment) => fragment.id === id);
    if (!item) return;
    setAiStatus("AI正在改写经历素材...", "neutral");
    item.aiAdvice = await runAiAction("fragment", JSON.stringify(item, null, 2));
    item.updatedAt = new Date().toISOString();
    await persistVault();
    setAiStatus("AI经历建议已保存", "ok");
  } catch (error) {
    setAiStatus(`AI失败：${formatAiError(error)}`, "error");
  }
}

async function aiForJob(id) {
  try {
    const vault = requireVault();
    const job = vault.jobs.find((item) => item.id === id);
    if (!job) return;
    setAiStatus("AI正在分析JD匹配度...", "neutral");
    job.aiAdvice = await runAiAction("job", JSON.stringify(job, null, 2));
    job.updatedAt = new Date().toISOString();
    await persistVault();
    setAiStatus("AI JD分析已保存", "ok");
  } catch (error) {
    setAiStatus(`AI失败：${formatAiError(error)}`, "error");
  }
}

async function aiForInterview(id) {
  try {
    const vault = requireVault();
    const interview = vault.interviews.find((item) => item.id === id);
    if (!interview) return;
    setAiStatus("AI正在复盘面试逐字稿...", "neutral");
    interview.aiAdvice = await runAiAction("interview", JSON.stringify(interview, null, 2));
    interview.updatedAt = new Date().toISOString();
    await persistVault();
    setAiStatus("AI面试复盘已保存", "ok");
  } catch (error) {
    setAiStatus(`AI失败：${formatAiError(error)}`, "error");
  }
}

function injectDrawer() {
  if (document.querySelector("#taskDrawer")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <aside id="taskDrawer" class="task-drawer" aria-label="任务详情">
      <div class="drawer-backdrop" data-close-drawer></div>
      <div class="drawer-panel">
        <button class="icon-button drawer-close" data-close-drawer type="button" aria-label="关闭">×</button>
        <div class="drawer-body"></div>
      </div>
    </aside>`);
}

function init() {
  renderDateLine();
  injectDrawer();
  hydrateSyncFields();
  renderAiPanel();
  installEventHandlers();
  renderAll();
  if (getToken()) {
    pullRemoteProgress().catch((error) => setSyncStatus(`自动拉取失败：${error.message}`, "error"));
  }
}

init();
