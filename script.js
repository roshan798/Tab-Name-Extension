const showTabName = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const tabNameElement = document.getElementById('tabName');
    tabNameElement.textContent = "Page title: " + tab.title;
};
document.getElementById('btn').addEventListener('click', (e) => {
    showTabName();
});
