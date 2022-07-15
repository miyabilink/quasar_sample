
export function addHogeAsync (context, payload) {
  context.commit('setHoge', payload.hoge)
}

export function addFugaAsync (context, payload) {
  context.commit('setFuga', payload.fuga)
}

// ここでは、stateの書き換えもするならここから各pageから呼び出す
