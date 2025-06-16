const id = new URLSearchParams(location.search).get('id');
fetch("/data/apps.json")
  .then(res => res.json())
  .then(data => {
    const app = data.find(a => a.id === id);
    if (!app) return;
    document.title = app.name;
    document.getElementById("app-details").innerHTML = `
      <h1>${app.name}</h1>
      <img src="${app.icon}" width="100"><br>
      <p>${app.desc}</p>
      <a href="${app.apk}" onclick="logDownload('${app.id}')">Tải ngay</a>
    `;
    document.getElementById("app-title").innerText = app.name;
    document.getElementById("app-description").content = app.desc;
    document.getElementById("og-title").content = app.name;
    document.getElementById("og-desc").content = app.desc;
    document.getElementById("og-img").content = app.icon;
  });