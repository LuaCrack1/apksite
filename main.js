fetch("/data/apps.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("app-list");
    list.innerHTML = "";
    data.forEach(app => {
      const el = document.createElement("div");
      el.innerHTML = `
        <img src="${app.icon}" width="50">
        <strong>${app.name}</strong><br>
        ${app.desc}<br>
        <a href="${app.apk}" onclick="logDownload('${app.id}')">Tải APK</a> |
        <a href="/app.html?id=${app.id}">Chi tiết</a>
      `;
      list.appendChild(el);
    });
  });