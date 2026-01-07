// 현재 상태 로드
chrome.storage.sync.get(['darkModeEnabled'], function(result) {
  const isEnabled = result.darkModeEnabled !== false; // 기본값은 true
  const toggle = document.getElementById('darkModeToggle');
  const status = document.getElementById('status');
  
  toggle.checked = isEnabled;
  updateStatus(isEnabled);
});

// 토글 변경 감지
document.getElementById('darkModeToggle').addEventListener('change', function(e) {
  const isEnabled = e.target.checked;
  
  // 상태 저장
  chrome.storage.sync.set({ darkModeEnabled: isEnabled }, function() {
    updateStatus(isEnabled);
    
    // 현재 탭의 백준 페이지에 메시지 전송
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0] && tabs[0].url && tabs[0].url.includes('acmicpc.net')) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          action: 'toggleDarkMode', 
          enabled: isEnabled 
        }, function(response) {
          // 오류 무시 (페이지가 아직 로드되지 않았을 수 있음)
          if (chrome.runtime.lastError) {
            console.log('Content script not ready:', chrome.runtime.lastError.message);
          }
        });
      }
    });
  });
});

function updateStatus(isEnabled) {
  const status = document.getElementById('status');
  if (isEnabled) {
    status.textContent = '✓ 다크모드 활성화됨';
    status.classList.add('active');
  } else {
    status.textContent = '○ 다크모드 비활성화됨';
    status.classList.remove('active');
  }
}
