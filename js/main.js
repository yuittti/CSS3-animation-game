(function(){
    "use strict";

    // Find all elements which will be used
    var bodyElem = document.getElementsByTagName("body")[0],
        wrapperElem = document.getElementsByClassName("wrapper")[0],
        icebergElem = document.getElementsByClassName("iceberg")[0],
        icebergPart1 = document.getElementsByClassName("part1")[0],
        icebergPart2 = document.getElementsByClassName("part2")[0],
        torpedo1 = document.getElementsByClassName("torpedo1")[0],
        torpedo2 = document.getElementsByClassName("torpedo2")[0],
        torpedo3 = document.getElementsByClassName("torpedo3")[0],
        torpedo4 = document.getElementsByClassName("torpedo4")[0],
        torpedo5 = document.getElementsByClassName("torpedo5")[0],
        torpedo6 = document.getElementsByClassName("torpedo6")[0],
        message = document.getElementsByClassName("message")[0],
        finishMsg = document.getElementsByClassName("finish")[0],
        restartBtn = document.getElementsByTagName("button")[0],

        // Initialize Iceberg block's coordinates
        icebergX,
        icebergX1,
        icebergY,
        icebergY1,

        // Number of attacks made
        countAttack = 0;

    // Check if mouse is on Iceberg during specified event
    //
    function mouseOnIceberg(event){
        // Find Iceberg block's coordinates
        icebergX = icebergElem.offsetLeft + wrapperElem.offsetLeft;
        icebergX1 = icebergX + icebergElem.offsetWidth;
        icebergY = icebergElem.offsetTop;
        icebergY1 = icebergY + icebergElem.offsetHeight;

        // Return 'true' if mouse is on Iceberg or 'false' if not
        return !!(event.pageX >= icebergX
            && event.pageX <= icebergX1
            && event.pageY >= icebergY
            && event.pageY <= icebergY1);
    }

    // Handle click on Wrapper to catch click on Iceberg
    //
    wrapperElem.addEventListener("click", function(event){
        if (mouseOnIceberg(event)){
            switch (countAttack){
                // First attack
                case 0:
                    // Turn on torpedo and wrapper animation
                    torpedo1.className += " attack1";
                    torpedo2.className += " attack2";
                    wrapperElem.className += " wrap-shake";

                    // Change styles after delay of animation time
                    setTimeout(function(){
                        wrapperElem.className = "wrapper";
                        icebergElem.style.backgroundImage = "url('./images/aisberg1.png')";
                        icebergPart1.style.display = "block";
                        icebergPart1.className = "draw";
                        message.className += " show-message";
                    }, 3100);

                    message.className = "message";
                    countAttack++;
                    break;

                // Second attack
                case 1:
                    // Turn on torpedo and wrapper animation
                    torpedo3.className += " attack3";
                    torpedo5.className += " attack5";
                    wrapperElem.className += " wrap-shake";

                    // Change styles after delay of animation time
                    setTimeout(function(){
                        wrapperElem.className = "wrapper";
                        icebergElem.style.backgroundImage = "url('./images/aisberg2.png')";
                        icebergPart2.style.display = "block";
                        icebergPart2.className = "draw";
                        message.innerHTML = "Great!<br>Almost done!<br>ONE MORE SHOT!";
                        message.className += " show-message";
                    }, 3100);

                    message.className = "message";
                    countAttack++;
                    break;

                // Third attack
                case 2:
                    // Turn on torpedo and wrapper animation
                    torpedo4.className += " attack4";
                    torpedo6.className += " attack6";
                    wrapperElem.className += " wrap-shake";

                    // Change styles after delay of animation time
                    setTimeout(function(){
                        wrapperElem.className = "wrapper";
                        icebergElem.style.top = "800px";
                        message.innerHTML = "CONGRATULATIONS ADMIRAL!!!";
                        message.className += " show-message";
                    }, 3100);

                    message.className = "message";
                    countAttack++;
                    break;
            }

            // When third attack is finished
            // show finish message and restart btn after delay of message animation time
            //
            setTimeout(function(){
                if (countAttack === 3){
                    finishMsg.style.opacity = 1;
                    finishMsg.style.visibility = "visible";
                    restartBtn.style.opacity = 1;
                    restartBtn.style.visibility = "visible";
                }
            }, 7000);
        }
    });

    // Handle mouse move event to catch movements on Iceberg
    //
    wrapperElem.addEventListener("mousemove", function(event){
        if (mouseOnIceberg(event)){
            bodyElem.style.cursor = "crosshair";
        }else{
            bodyElem.style.cursor = "default";
        }
    });

    // Handle restart btn click
    //
    restartBtn.addEventListener("click", function(){
        location.reload(true);
    });
})();