//: A Cocoa based Playground to present user interface

import Foundation

// FileManager 인스턴스 생성
let fileManager = FileManager()

// document 디렉토리의 경로 저장
let documentsDirectory = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first!

// 해당 디렉토리 이름 지정
let dataPath = documentsDirectory.appendingPathComponent("git/ttegululu.github.io/scripts/getFileNameFromImagesFolder.js")



// 해당 디렉토리 경로
let desktopPath = "/Users/gotaegyu/Documents/git/ttegululu.github.io/images"

do {
    // contentsOfDirectory(atPath:)가 해당 디렉토리 안의 파일 리스트를 배열로 반환
    let contents = try fileManager.contentsOfDirectory(atPath: desktopPath)

    // subpathsOfDirectory(atPath:)가 해당 디렉토리의 하위에 있는 모든 파일을 배열로 반환
//    let deeperContents = try fileManager.subpathsOfDirectory(atPath: desktopPath)

//    print(contents)
//    print(deeperContents)
    
    do {
        // 쓸 내용
        let contentsToStr = contents.sorted(by:<).joined(separator: "',\n'")
        let text = "getFileNameFromImagesFolder = ['\(contentsToStr)']"
        
        do {
            // 쓰기 작업
            try text.write(to: dataPath, atomically: false, encoding: .utf8)
        }
    } catch let error as NSError {
        print("Error Writing File : \(error.localizedDescription)")
    }
    
    
} catch let error as NSError {
    print("Error access directory: \(error)")
}

