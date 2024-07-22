import Layout from "@/layout";
const componentsRouter = {
  path: "/visitorAnalysis",
  component: Layout,
  redirect: "noRedirect",
  name: "visitorAnalysis",
  meta: {
    title: "访客分析",
    icon: "visitor",
  },
  children: [
    {
      path: "newoldVisitor",
      component: () =>
        import("@/views/visitor-analysis/newOld-visitor-analysis"),
      name: "newoldVisitor",
      meta: { title: "新老访客分析" },
    },
    {
      path: "regional",
      component: () => import("@/views/visitor-analysis/regional-analysis"),
      name: "regional",
      meta: { title: "访客地域分析" },
    },
    {
      path: "sourceWeb",
      component: () => import("@/views/visitor-analysis/sourceWeb-analysis"),
      name: "sourceWebAnalysis",
      meta: { title: "访客来源分析" },
    },
    {
      path: "channel",
      component: () => import("@/views/visitor-analysis/channel-analysis"),
      name: "channel",
      meta: { title: "访客渠道分析" },
    },
    {
      path: "equipment",
      component: () => import("@/views/visitor-analysis/equipment-analysis"),
      name: "equipment",
      meta: { title: "访客设备分析" },
    },
  ],
};

export default componentsRouter;
