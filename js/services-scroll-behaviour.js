const course_box = document.querySelector("#course_box");
const course = document.querySelector(".courses-section__courses-box");

//observer options
const options = { threshold: 0, rootMargin: "-10%" };

const course_box__observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    course.classList.add("course-appear");
  });
}, options);

course_box__observer.observe(course_box);
