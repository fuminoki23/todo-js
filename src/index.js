const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const list = document.getElementById("list");
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = inputText;

  const compBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
    const delTarget = delBtn.parentNode;
    list.removeChild(delTarget);

    const addTarget = compBtn.parentNode;
    const text = addTarget.firstElementChild;
    addTarget.textContent = null;

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      const delTarget = backBtn.parentNode;
      document.getElementById("compList").removeChild(delTarget);

      const addTarget = backBtn.parentNode;
      const text = addTarget.firstElementChild;

      addTarget.textContent = null;

      li.appendChild(text);
      li.appendChild(compBtn);
      li.appendChild(delBtn);
      list.appendChild(li);
    });

    li.appendChild(text);
    li.appendChild(backBtn);
    const compList = document.getElementById("compList");
    compList.appendChild(li);
  });

  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    // deleteFromIncompList(delBtn.parentNode);
    const delTarget = delBtn.parentNode;
    list.removeChild(delTarget);
  });
  li.appendChild(p);
  li.appendChild(compBtn);
  li.appendChild(delBtn);
  list.appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
