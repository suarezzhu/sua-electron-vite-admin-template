import {ElMessage} from "element-plus";

/**
 * @name: init
 * @author: suarezzhu
 * @date: 2023/2/13 13:49
 * @description：init
 * @update: 2023/2/13 13:49
 */

const { ipcRenderer, shell } = require("electron");


const StartServer=()=> {
    ipcRenderer.invoke("start-server").then((res) => {
        if (res) {
            ElMessage({
                type: "success",
                message: res,
            });
        }
    });
}

StartServer()