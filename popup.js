document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("status");

  chrome.storage.sync.get(
    ["bg-status"],
    (data) => (input.checked = JSON.parse(data["bg-status"]))
  );

  input.addEventListener("change", () => {
    chrome.storage.sync.set({ "bg-status": JSON.stringify(input.checked) });
  });
});
