# dsh-agentteam-worktree-demo

DeepSeek Harness 0.2.2-rc.1 的 AgentTeam 与 Git Worktree 测试仓库。

三个互不依赖的小模块，各自带测试，初始状态测试全部失败：

- `src/textutil.js`：文本工具（slugify、truncate、countWords）
- `src/mathutil.js`：数值工具（clamp、average、median）
- `src/datefmt.js`：日期格式化（formatDate、daysBetween）

运行测试：`node --test`（Node 18+，无第三方依赖）。
