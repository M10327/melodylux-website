window.addEventListener('load', moveSlots, false);
window.addEventListener('load', forceSlots, false);

function forceSlots(){
    var slots = document.getElementsByClassName("slotmachine-roll");
    for (var i = 0, ii = slots.length; i < ii; i++) {
        slots[i].style.backgroundPosition = "0px 0px";
    };
}

var slotmachine_active = false;
var slotmachine_alive = [true, true, true];
var slotmachine_offset = [0, 0, 0];
var slotmachine_select = 0;
var slots_skip1 = 15;
var slots_skip2 = slots_skip1 * 2;
var slots_winningRange = 64;
var slots_size = 128;
var slots_speed = 20;
var slots_amount = 6;

function moveSlots(){
    if (!slotmachine_active) return;
    var slots = document.getElementsByClassName("slotmachine-roll");
    for (var i = 0, ii = 3; i < ii; i++) {
        if (i == 1 && slots_skip1 > 0){
            slots_skip1--;
            continue;
        }
        if (i == 2 && slots_skip2 > 0){
            slots_skip2--;
            continue;
        }
        if (slotmachine_alive[i]){
            slotmachine_offset[i] += slots_speed;
            slots[i].style.backgroundPosition = "0px " + slotmachine_offset[i] + "px";
        }
    };

    requestAnimationFrame(moveSlots);
}

var slots_button = document.getElementById("slotmachine-button");
slots_button.onclick = function() {
    if (!slotmachine_active){
        slotmachine_active = true;
        slotmachine_alive = [true, true, true];
        slotmachine_select = 0;
        document.getElementById("slotmachine-response").innerHTML = "";
        moveSlots();
    }
    else if (slotmachine_select <= 2){
        slotmachine_alive[slotmachine_select] = false;

        var slots = document.getElementsByClassName("slotmachine-roll");
        if (slotmachine_offset[slotmachine_select] % slots_size != 0){
            var add = slots_size - (slotmachine_offset[slotmachine_select] % slots_size);
            slotmachine_offset[slotmachine_select] += add;
            slots[slotmachine_select].style.backgroundPosition = "0px " + slotmachine_offset[slotmachine_select] + "px";
        }
        PlayAudio("holocure/snd_slotroll.wav", 0.3);
        slotmachine_select++;
        if (slotmachine_select == 3) slotsCompleted();
    }
}

function slotsCompleted(){
    slotmachine_active = false;
    var slot1 = (slotmachine_offset[0] % (slots_size * slots_amount)) / slots_size;
    var slot2 = (slotmachine_offset[1] % (slots_size * slots_amount)) / slots_size;
    var slot3 = (slotmachine_offset[2] % (slots_size * slots_amount)) / slots_size;
    //slot1 = 0; slot2 = 0; slot3 = 0;
    if (slot1 == slot2 && slot2 == slot3){
        document.getElementById("slotmachine-response").innerHTML = "You Win!";
        PlayAudio("holocure/snd_casino_win.wav", 0.3);
    }
    else{
        document.getElementById("slotmachine-response").innerHTML = "aww dang it";
        PlayAudio("holocure/snd_slotfailed.wav", 0.3);
    }
}