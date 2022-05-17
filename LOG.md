# Rust Wasm study log

## Install

- `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
  - Rust 설치
- `rustup toolchain list`
  - 설치된 cross-compiler 확인
- `rustup target list | grep wasm`
  - wasm compiler 설치유무 확인
- `rustup target add wasm32-unknown-unknown`
  - wasm compiler 설치
- `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`
  - 

```bash
# 
willing@dev-willing:~/projects/wasm-game-of-life$ rustup toolchain list
stable-x86_64-unknown-linux-gnu (default)
willing@dev-willing:~/projects/wasm-game-of-life$ rustup target list | grep wasm
wasm32-unknown-emscripten
wasm32-unknown-unknown (installed)
wasm32-wasi
willing@dev-willing:~/projects/wasm-game-of-life$ rustup target add wasm32-unknown-unknown
info: component 'rust-std' for target 'wasm32-unknown-unknown' is up to date
```

