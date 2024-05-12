document.addEventListener('DOMContentLoaded', () =>{
    document.body.innerHTML = "<div class=\"container\"><div class=\"up\">    <div class=\"left\">        <textarea name=\"\" id=\"text\"></textarea>        <button class=\"save btn\" onclick=\"save()\">Сохранить</button>    </div>    <div class=\"right\">        <input type=\"file\" id=\"load\" style=\"display: none;\" accept=\"image/png, image/gif, image/webp, image/jpeg\" onchange=\"load()\">        <label for=\"load\" class=\"load-label btn\">Загрузить фото</label>        <img id=\"loaded-img\" src=\"\" alt=\"\">    </div></div><div class=\"down\">    <div class=\"left\">        <form action=\"\" method=\"get\">            <input type=\"hidden\" name=\"A\" value=\"1\">            <button class=\"start btn\" type=\"submit\">Запустить</button>        </form>            <button class=\"pause btn\">Пауза</button>        <form action=\"\" method=\"get\">            <input type=\"hidden\" name=\"A\" value=\"0\">            <button class=\"stop btn\" type=\"submit\">Остановить</button>        </form>    </div>    <div class=\"right\"><input type=\"hidden\" name=\"A\" value=\"1\">        <img src=\"https://cdn.jsdelivr.net/gh/GaleevArslanDev/slash@main/Лого.png\" alt=\"лого\" srcset=\"\">    </div></div></div>" + document.body.innerHTML;
    var textarea = document.querySelector("#text");
    var input = document.querySelector("#load");
    var input_label = document.querySelector(".load-label");
    var img = document.querySelector("#loaded-img");
    var save_btn = document.querySelector(".save");

    function save() {
        textarea.setAttribute("readonly", "");
        textarea.style.color = "#ccc";
        save_btn.style.backgroundColor = "#ccc";
        save_btn.style.border = "2px solid #444";
        save_btn.style.color = "#444";
        save_btn.style.cursor = "not-allowed";
        textarea.style.cursor = "not-allowed";

        // преобразование в шифр
        var code = textarea.value;

        localStorage.setItem("v3p5f2rdj3o21y", code);
    }

    async function load() {
        const worker = await Tesseract.createWorker("rus+deu+eng");

        const result_obj = await worker.recognize(input.files[0]);
        var result = result_obj.data.text.replace("гдз.ру", "");
        result = result.replace("Я7.ги", "");
        result = result.replace("ra3.py", "");
        result = result.replace("gdz.ru", "");
        result = result.replace("942.ги", "");
        textarea.value = result;

        

        var reader = new FileReader();
        reader.onload = function () {
            img.src = reader.result;
            img.style.width = "inherit";
            input_label.style.display = "none";
        };
        reader.readAsDataURL(input.files[0]);
    }

    function getFile(filePath) {
        return filePath.substr(filePath.lastIndexOf("\\") + 1).split(".")[0];
    }
})
