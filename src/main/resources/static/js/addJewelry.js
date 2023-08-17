let selectColor =  $("#modalAdd #acolor");
for (let i=0; i<colors.length; i++){
    let option = $('<option>');
    option.html(colors[i]);
    selectColor.append(option);
}

$(document).on("click", "#buttonAdd", async function () {
    let id=1;
    let name = $("#modalAdd #aname").val();
    let color = $("#modalAdd #acolor").val();
    let price = $("#modalAdd #aprice").val();
    let priceNew = $("#modalAdd #apriceNew").val();
    let file = $('#afile').prop('files')[0];
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    var image = await toBase64(file);

    const res = await
        fetch(`http://localhost:8080/api/jewelries`,
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id, name, color, price, priceNew, image})
            });

    $("#modalAdd").modal().hide();
    location.reload();
    //$("#modalUpdate #cancel").click()
})