export const tabs = () => {
  const tabWrappers = document.querySelectorAll(".tabs-wrapper");
  tabWrappers.forEach((wrapper) => {
    const tabs = wrapper.querySelectorAll(".tab");
    const tabsContent = wrapper.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      const activeTab = wrapper.querySelector(".tab.active");

      tabsContent.forEach((content) => {
        if (
          content.dataset.tabContent.split(" ").includes(activeTab.dataset.tab)
        ) {
          content.classList.remove("hidden");
        } else {
          content.classList.add("hidden");
        }
      });

      tab.addEventListener("click", (e) => {
        const activeTab = wrapper.querySelector(".tab.active");
        activeTab.classList.remove("active");
        e.target.classList.add("active");
        tabsContent.forEach((content) => {
          if (
            content.dataset.tabContent.split(" ").includes(e.target.dataset.tab)
          ) {
            content.classList.remove("hidden");
          } else {
            content.classList.add("hidden");
          }
        });
      });
    });
  });
};
