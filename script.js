function decreaseCounter(button) {
    let count = parseInt(button.innerText);
    if (count > 0) {
        count--;
        button.innerText = count;
    }
}

function resetCounter(button) {
    let parent = button.parentElement;
    let counterButton = parent.querySelector("button:first-child");
    counterButton.innerText = "100"; // تعيين العداد إلى 100 أو الرقم الأساسي
}
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // يفتح ويغلق القائمة عند الضغط
}

// إغلاق القائمة عند الضغط على أي رابط داخلها
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("sidebar").classList.remove("open");
    });
});



// استدعاء الشعار باستخدام ID
const logo = document.getElementById('logo');

// وظيفة مراقبة التمرير
window.onscroll = function() {
    // التحقق إذا كان المستخدم في أعلى الصفحة
    if (window.scrollY <= 50) {
        logo.classList.add('show-logo'); // إضافة الصنف "show-logo" لإظهار الشعار
    } else {
        logo.classList.remove('show-logo'); // إزالة الصنف "show-logo" لإخفاء الشعار
    }
};
