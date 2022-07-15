export function setHoge (state, payload) {
  state.hoge = payload
}

export function setFuga (state, payload) {
  state.fuga = payload
}

// ここはデータのデータ書き換えメソッド場（Javaでいうsetter）stateの読み書き命令。
// ただし、各pageからこれを直接呼び出すのはよくないとされる。
// 各pageからはaction内の命令を呼び出して、そのactionの内部でこのmutationのメソッドを呼び出すようにする。
