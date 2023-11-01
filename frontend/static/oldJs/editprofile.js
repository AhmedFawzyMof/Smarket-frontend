function editName() {
  const EditName = document.getElementById("EditName");

  EditName.addEventListener("submit", async (e) => {
    e.preventDefault();
    const editNameData = new FormData(EditName);
    const form = {};

    for (const pair of editNameData) {
      const key = pair[0];
      const value = pair[1];
      form[key] = value;
    }

    const response = await fetch(
      "http://localhost:5500/profile",
      {
        method: "post",
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    if (data.Error) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول",
        time: 2000,
      });
      localStorage.removeItem("AuthToken");
      setTimeout(() => {
        window.location = "/login";
      }, 2000);
    } else {
      CreateToast({
        type: "success",
        message: "تمت عملية تعديل الاسم بنجاح",
        time: 5000,
      });
    }
  });
}

editName();

function editPassword() {
  const EditPassword = document.getElementById("EditPassword");
  EditPassword.addEventListener("submit", async (e) => {
    e.preventDefault();

    const editPasswordData = new FormData(EditPassword);
    const form = {};

    for (const pair of editPasswordData) {
      const key = pair[0];
      const value = pair[1];
      form[key] = value;
    }

    Object.assign(form, { token: localStorage.getItem("AuthToken") });

    const response = await fetch(
      "http://localhost:5500/profile",
      {
        method: "post",
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();
    if (data.Error) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول",
        time: 2000,
      });
      localStorage.removeItem("AuthToken");
      setTimeout(() => {
        window.location = "/login";
      }, 2000);
    } else {
      CreateToast({
        type: "success",
        message: "تمت عملية تعديل كلمة المرور بنجاح",
        time: 5000,
      });
    }
  });
}

editPassword();

function editEmail() {
  const EditEmail = document.getElementById("EditEmail");

  EditEmail.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(EditEmail);
    const form = {};

    for (const pair of formData) {
      const key = pair[0];
      const value = pair[1];
      form[key] = value;
    }

    Object.assign(form, { token: localStorage.getItem("AuthToken") });

    const response = await fetch(
      "http://localhost:5500/profile",
      {
        method: "post",
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();
    if (data.Error) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول",
        time: 2000,
      });
      localStorage.removeItem("AuthToken");
      setTimeout(() => {
        window.location = "/login";
      }, 2000);
    } else {
      CreateToast({
        type: "success",
        message: "تمت عملية تعديل البريد الإلكتروني بنجاح",
        time: 5000,
      });
    }
  });
}

editEmail();
