from glob import glob

getFilesNameList = glob("images/*")
getFilesNameListToStr = "\n".join(getFilesNameList)
getFilesName = getFilesNameListToStr.replace("images\\","")
getFilesNameToArr = getFilesName.split("\n")
getFilesNameToArrToStr = str(getFilesNameToArr)
getFilesNameToArrToStrLine = getFilesNameToArrToStr.replace(" ","\n")

with open("C:/Users/y2k-1/Downloads/git/ttegululu.github.io/scripts/getFilesNameFromFolder.js", "w") as f:
    f.write("getFileNameFromFolder = "+getFilesNameToArrToStrLine)
