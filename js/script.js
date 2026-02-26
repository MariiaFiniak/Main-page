"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const iconMenu = document.querySelector(".icon-menu")
  const mobileMenu = document.querySelector(".mobile-menu")
  const header = document.querySelector(".home-header")
  const body = document.body

  if (iconMenu && mobileMenu) {
    iconMenu.addEventListener("click", () => {
      body.classList.toggle("open-menu")
      mobileMenu.classList.toggle("active")
      iconMenu.classList.toggle("active")

      if (body.classList.contains("open-menu")) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
    })
  }

  // 2. Закриття меню при кліку на посилання
  document.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-menu a")) {
      closeMenu()
    }
  })

  // 3. Ефект скролу для шапки (home-header)
  if (header) {
    window.addEventListener("scroll", () => {
      // Додаємо клас, коли проскролили більше 20 пікселів
      header.classList.toggle("scrolled", window.scrollY > 20)
    })
  }

  // 4. Функція закриття меню
  function closeMenu() {
    body.classList.remove("open-menu")
    mobileMenu?.classList.remove("active")
    iconMenu?.classList.remove("active")
    body.style.overflow = ""
  }

  // 5. Автоматичне закриття меню, якщо розширили екран
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      closeMenu()
    }
  })
})
