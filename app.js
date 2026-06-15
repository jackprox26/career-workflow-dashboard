const workflows = [
  {
    id: "resume",
    title: "AI产品简历与定位",
    week: "第1周",
    summary: "完成主简历和3类岗位定位，启动小规模投递。",
    deliverables: ["通用简历", "电商AI版", "供应链质检版", "自我介绍"],
    tasks: [
      "列出3段最强经历",
      "收集30个JD样本",
      "提取岗位高频关键词",
      "完成AI产品经理通用简历",
      "生成电商AI版简历",
      "生成供应链/质检AI版简历",
      "完成30秒自我介绍"
    ]
  },
  {
    id: "qc-copilot",
    title: "Fashion QC Copilot",
    week: "第1-2周",
    summary: "把质检审单经验做成主作品集，覆盖PRD、流程、指标和脱敏样例。",
    deliverables: ["PRD", "流程图", "Dify节点表", "模拟输入输出", "指标体系"],
    tasks: [
      "写项目背景和用户画像",
      "梳理质检审单痛点",
      "画字段抽取到审核建议流程图",
      "整理Dify节点说明表",
      "制作模拟输入输出样例",
      "定义字段抽取准确率等指标",
      "补充脱敏与人审兜底策略"
    ]
  },
  {
    id: "supplier-risk",
    title: "供应商质量风险看板",
    week: "第3周",
    summary: "用质量数据和供应商管理经验做第二作品，证明数据产品和供应链决策能力。",
    deliverables: ["模拟数据表", "风险评分规则", "看板线框", "AI周报摘要"],
    tasks: [
      "设计供应商模拟数据字段",
      "定义严重疵点与复发率规则",
      "定义整改超期与批次波动规则",
      "画风险排行与趋势看板线框",
      "写AI质量周报摘要样例",
      "整理供应商行动建议"
    ]
  },
  {
    id: "interview",
    title: "面试故事与投递",
    week: "第4周",
    summary: "准备8个STAR故事并进入投递，获取真实市场反馈。",
    deliverables: ["8个STAR", "投递表", "面试复盘", "JD反馈"],
    tasks: [
      "写AI审单STAR故事",
      "写AI图像识别嵌入品控故事",
      "写供应商质量管理故事",
      "写大货抽检异常复盘故事",
      "写外包转型员工面谈故事",
      "完成10-20个岗位投递测试",
      "记录JD匹配度与反馈"
    ]
  },
  {
    id: "ops-system",
    title: "求职支撑系统",
    week: "全月",
    summary: "建立求职、作品集、健康、财务的执行看板，避免资料散落。",
    deliverables: ["Obsidian入口", "投递表", "健康表", "财务表", "周复盘"],
    tasks: [
      "维护Obsidian知识库入口",
      "建立投递记录字段",
      "建立健康执行记录",
      "建立月度财务记录",
      "每周日完成周复盘",
      "每次面试后更新复盘"
    ]
  }
];

const portfolioItems = [
  {
    id: "qc-copilot",
    title: "Fashion QC Copilot",
    type: "主作品",
    status: "进行中",
    copy: "面向服饰质检审单场景，设计字段抽取、SOP校验、疵点库检索、规则判定和人工复核。",
    stats: [
      ["目标岗位", "服饰/供应链AI PM"],
      ["核心证据", "Dify工作流 + 指标页"],
      ["展示方式", "案例页 + 流程图"]
    ]
  },
  {
    id: "supplier-risk",
    title: "供应商质量风险看板",
    type: "第二作品",
    status: "待启动",
    copy: "把抽检、严重疵点、复发率、整改超期等数据转成供应商风险评分和行动建议。",
    stats: [
      ["目标岗位", "供应链AI/数据产品"],
      ["核心证据", "模拟数据 + 评分规则"],
      ["展示方式", "看板线框 + 周报"]
    ]
  },
  {
    id: "visual-qc",
    title: "外观质检视觉模块",
    type: "扩展模块",
    status: "待拆解",
    copy: "基于外观缺陷识别项目拆解，定义AI可判、AI辅助、人工复核边界。",
    stats: [
      ["目标岗位", "多模态/视觉AI产品"],
      ["核心证据", "公开项目拆解"],
      ["展示方式", "模块方案"]
    ]
  }
];

const storageKey = "career-workflow-progress-v1";
const remoteConfigKey = "career-workflow-remote-config-v1";
let progress = loadProgress();
let remoteConfig = loadRemoteConfig();
let pushTimer = null;

const views = {
  overview: document.querySelector("#overviewView"),
  workflows: document.querySelector("#workflowsView"),
  today: document.querySelector("#todayView"),
  portfolio: document.querySelector("#portfolioView")
};

const viewTitles = {
  overview: "总览",
  workflows: "工作流",
  today: "今日",
  portfolio: "作品集"
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  scheduleRemotePush();
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

function updateProviderFields() {
  const provider = document.querySelector("#syncProviderSelect")?.value || getProvider();
  document.querySelectorAll("[data-provider-fields]").forEach((element) => {
    element.classList.toggle("is-hidden", element.dataset.providerFields !== provider);
  });
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

function buildProgressPayload(source = "web") {
  return {
    schemaVersion: 1,
    source,
    userId: getUserId(),
    clientUpdatedAt: new Date().toISOString(),
    overall: getAllStats(),
    progress
  };
}

function encodePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function textToBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToText(base64) {
  const binary = atob(base64.replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function requestCloudflare(path, options = {}) {
  const token = getToken();
  if (!token) throw new Error("缺少同步令牌");
  const headers = {
    "Content-Type": "application/json",
    "X-Sync-Token": token,
    ...(options.headers || {})
  };
  const response = await fetch(`${getApiBase()}${path}`, { ...options, headers });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }
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
  const response = await fetch(githubContentUrl(), {
    method: "GET",
    headers: githubHeaders()
  });
  if (response.status === 404 && allowMissing) return null;
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `GitHub HTTP ${response.status}`);
  }
  const data = await response.json();
  const record = JSON.parse(base64ToText(data.content || ""));
  return { record, sha: data.sha };
}

async function putGithubProgress(payload) {
  const { branch } = getGithubConfig();
  const existing = await fetchGithubProgress({ allowMissing: true });
  const record = {
    ...payload,
    source: payload.source || "web-github",
    updatedAt: new Date().toISOString()
  };
  const body = {
    message: `Update career progress ${record.updatedAt}`,
    content: textToBase64(`${JSON.stringify(record, null, 2)}\n`),
    branch: branch || "main"
  };
  if (existing?.sha) body.sha = existing.sha;

  const response = await fetch(githubContentUrl().replace(/\?ref=.*/, ""), {
    method: "PUT",
    headers: githubHeaders(),
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `GitHub HTTP ${response.status}`);
  }
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
  if (getProvider() === "github") {
    return putGithubProgress(payload);
  }
  return requestCloudflare(`/api/progress?user=${encodeURIComponent(getUserId())}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

async function pullRemoteProgress() {
  setSyncStatus("正在拉取云端进度...");
  const data = await fetchRemoteProgress();
  if (data && data.progress && typeof data.progress === "object") {
    progress = data.progress;
    localStorage.setItem(storageKey, JSON.stringify(progress));
    renderAll();
    setSyncStatus(`已拉取云端进度：${data.updatedAt || "无更新时间"}`, "ok");
    return;
  }
  setSyncStatus("云端暂无进度，保留本地状态", "neutral");
}

async function pushRemoteProgress(source = "web") {
  setSyncStatus("正在同步到云端...");
  const payload = buildProgressPayload(source);
  const data = await putRemoteProgress(payload);
  setSyncStatus(`已同步：${data.updatedAt}`, "ok");
}

function scheduleRemotePush() {
  if (!getToken()) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushRemoteProgress("web-auto").catch((error) => setSyncStatus(`自动同步失败：${error.message}`, "error"));
  }, 700);
}

function taskKey(workflowId, index) {
  return `${workflowId}:${index}`;
}

function getWorkflowStats(workflow) {
  const total = workflow.tasks.length;
  const done = workflow.tasks.filter((_, index) => progress[taskKey(workflow.id, index)]).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, percent };
}

function getAllStats() {
  const total = workflows.reduce((sum, workflow) => sum + workflow.tasks.length, 0);
  const done = workflows.reduce((sum, workflow) => sum + getWorkflowStats(workflow).done, 0);
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, percent };
}

function renderMetrics() {
  const all = getAllStats();
  const portfolioReady = portfolioItems.filter((item) => item.status === "进行中").length;
  const metrics = [
    ["总体完成", all.percent, "%"],
    ["已完成任务", all.done, `/${all.total}`],
    ["作品集资产", portfolioItems.length, "个"],
    ["主投方向", 3, "类"]
  ];

  document.querySelector("#metricsGrid").innerHTML = metrics
    .map(
      ([label, value, unit]) => `
        <article class="metric-card">
          <span>${label}</span>
          <div class="metric-value">${value}<small>${unit}</small></div>
        </article>
      `
    )
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
          <div class="node-title">${workflow.title}</div>
          <div class="node-copy">${workflow.summary}</div>
          <div class="progress-track" aria-label="${workflow.title}进度">
            <div class="progress-fill" style="--progress: ${stats.percent}%"></div>
          </div>
          <div class="progress-row">
            <span>${stats.done}/${stats.total}</span>
            <span>${workflow.week}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function taskMarkup(workflow, index, compact = false) {
  const key = taskKey(workflow.id, index);
  const checked = Boolean(progress[key]);
  return `
    <label class="task-item ${checked ? "is-done" : ""}">
      <input type="checkbox" data-workflow="${workflow.id}" data-index="${index}" ${checked ? "checked" : ""} />
      <span>
        <span class="task-title">${workflow.tasks[index]}</span>
        <span class="task-meta">${workflow.title} · ${workflow.week}</span>
      </span>
      <span class="task-tag">${checked ? "完成" : compact ? "本周" : "待办"}</span>
    </label>
  `;
}

function renderWeekOne() {
  const weekOneTasks = workflows
    .slice(0, 2)
    .flatMap((workflow) => workflow.tasks.map((_, index) => taskMarkup(workflow, index, true)))
    .slice(0, 8);
  document.querySelector("#weekOneList").innerHTML = weekOneTasks.join("");
}

function renderWorkflows() {
  document.querySelector("#workflowGrid").innerHTML = workflows
    .map((workflow) => {
      const stats = getWorkflowStats(workflow);
      return `
        <article class="workflow-card">
          <div class="workflow-card-header">
            <div>
              <p class="eyebrow">${workflow.week}</p>
              <h3>${workflow.title}</h3>
            </div>
            <span class="status-badge">${stats.percent}%</span>
          </div>
          <p>${workflow.summary}</p>
          <div class="deliverable-list">
            ${workflow.deliverables.map((item) => `<span class="deliverable">${item}</span>`).join("")}
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="--progress: ${stats.percent}%"></div>
          </div>
          <div class="progress-row">
            <span>${stats.done}/${stats.total} 已完成</span>
            <span>${stats.percent === 100 ? "可验收" : "推进中"}</span>
          </div>
          <div class="task-list">
            ${workflow.tasks.map((_, index) => taskMarkup(workflow, index)).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderToday() {
  const pending = workflows.flatMap((workflow) =>
    workflow.tasks
      .map((_, index) => ({ workflow, index, key: taskKey(workflow.id, index) }))
      .filter((item) => !progress[item.key])
  );
  const today = pending.slice(0, 8);
  document.querySelector("#todayCount").textContent = `${today.length}项`;
  document.querySelector("#todayList").innerHTML =
    today.length === 0
      ? `<div class="empty">所有任务都已完成。可以导出进度，或新增下一轮工作流。</div>`
      : today.map((item) => taskMarkup(item.workflow, item.index)).join("");
}

function renderPortfolio() {
  document.querySelector("#portfolioGrid").innerHTML = portfolioItems
    .map(
      (item, index) => `
        <article class="portfolio-card ${index === 0 ? "primary" : ""}">
          <div class="portfolio-header">
            <div>
              <p class="eyebrow">${item.type}</p>
              <h3>${item.title}</h3>
            </div>
            <span class="status-badge">${item.status}</span>
          </div>
          <p>${item.copy}</p>
          <div class="portfolio-meta">
            ${item.stats
              .map(
                ([label, value]) => `
                  <div class="mini-stat">
                    <span>${label}</span>
                    <strong>${value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderMetrics();
  renderMap();
  renderWeekOne();
  renderWorkflows();
  renderToday();
  renderPortfolio();
  bindTaskEvents();
}

function renderDateLine() {
  const dateLine = document.querySelector("#dateLine");
  if (!dateLine) return;
  const today = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })
    .format(new Date())
    .replaceAll("/", "-");
  dateLine.textContent = `${today} / 30天冲刺`;
}

function bindTaskEvents() {
  document.querySelectorAll('input[type="checkbox"][data-workflow]').forEach((input) => {
    input.addEventListener("change", (event) => {
      const workflowId = event.target.dataset.workflow;
      const index = Number(event.target.dataset.index);
      progress[taskKey(workflowId, index)] = event.target.checked;
      saveProgress();
      renderAll();
    });
  });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    Object.values(views).forEach((section) => section.classList.remove("is-visible"));
    views[view].classList.add("is-visible");
    document.querySelector("#viewTitle").textContent = viewTitles[view];
  });
});

document.querySelector("#resetButton").addEventListener("click", () => {
  if (!confirm("确认重置所有工作流进度？")) return;
  progress = {};
  saveProgress();
  renderAll();
});

document.querySelector("#saveConfigButton").addEventListener("click", () => {
  const apiBase = document.querySelector("#apiBaseInput").value.trim();
  remoteConfig = {
    ...remoteConfig,
    provider: document.querySelector("#syncProviderSelect").value,
    apiBase,
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

document.querySelector("#pullRemoteButton").addEventListener("click", () => {
  pullRemoteProgress().catch((error) => setSyncStatus(`拉取失败：${error.message}`, "error"));
});

document.querySelector("#pushRemoteButton").addEventListener("click", () => {
  pushRemoteProgress("web-manual").catch((error) => setSyncStatus(`同步失败：${error.message}`, "error"));
});

document.querySelector("#exportButton").addEventListener("click", () => {
  const all = getAllStats();
  const payload = {
    exportedAt: new Date().toISOString(),
    overall: all,
    workflows: workflows.map((workflow) => ({ ...workflow, stats: getWorkflowStats(workflow) })),
    progress
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "career-workflow-progress.json";
  link.click();
  URL.revokeObjectURL(url);
});

renderDateLine();
hydrateSyncFields();
renderAll();
if (getToken()) {
  pullRemoteProgress().catch((error) => setSyncStatus(`自动拉取失败：${error.message}`, "error"));
}
