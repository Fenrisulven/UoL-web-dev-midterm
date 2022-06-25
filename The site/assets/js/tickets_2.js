switchTicket = (evt, currentDivId) =>
{
    //Reset visibility of all divs with tickets' content
    let ticketDivs = document.getElementsByClassName("ticket_tab_content");
    for (let i = 0; i < ticketDivs.length; i++)
    {
        ticketDivs[i].style.display = "none";
    }

    //Reset activity of all ticket tabs
    let ticketButtons = document.getElementsByClassName("ticket_tab_button");
    for (let i = 0; i < ticketButtons.length; i++)
    {
        ticketButtons[i].className = ticketButtons[i].className.replace(" active", " ");
    }

    //Set visibility and activity to the current tab's content
    document.getElementById(currentDivId).style.display = "grid";
    document.getElementById(currentDivId).style.gridTemplateColumns = "80% 10% 10%";
    document.getElementById(currentDivId).style.gridTemplateRows = "20% 30% 20%";
    evt.currentTarget.className += " active";
}

bookSpecial = (evt, specialNum) =>
{
    let modal           = document.getElementById("specials_modal_window");
    modal.style.display = "block";

    let activityInput   = document.getElementById("specials_modal_window_input_4");
    activityInput.value = specialNum;
}

closeModal = () =>
{
    let modal           = document.getElementById("specials_modal_window");
    modal.style.display = "none";
}

window.onclick = (event) =>
{
    let modal           = document.getElementById("specials_modal_window");
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
