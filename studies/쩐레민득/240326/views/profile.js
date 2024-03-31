export default () => /*html*/ `
    <button class="button back-button" data-back>
    <i class="fa fa-arrow-left"></i> back 
    </button>

    <div class="profile-card">
<div class="profile-card__header">
  <p class="profile-card__header--title">Profile</p>
  <div class="profile-card__header--info">
    <div class="profile-card__header--avatar-wrapper">
      <span class="profile-card__header--avatar">
        <!--profile 사진 -->
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-9251893-7590885.png?f=webp"
          class="profile-card__header--avatar-img"
          loading="lazy"
        />
      </span>
    </div>

    <div class="profile-card__header--info-wrapper">
      <p>사용자</p>
      <span class="text-small text-default-500"
        >(대학생)</span
      >
    </div>
  </div>
</div>

<div class="profile-card__body">
  <div class="input-wrapper">
    <label for="">Nickname</label>
    <input class="input" placeholder="Enter nickname" />
  </div>

  <div class="input-wrapper">
    <label for="">ID</label>
    <input class="input" placeholder="Enter ID" />
  </div>

  <div class="input-wrapper">
    <label for="">Password</label>
    <input class="input" placeholder="Enter password" />
  </div>

  <div class="input-wrapper">
    <label for="">Mail</label>
    <input class="input" placeholder="Enter mail" />
  </div>

  <div class="input-wrapper">
    <label for="">Address</label>
    <input class="input" placeholder="Enter address" />
  </div>

  <div class="input-wrapper">
    <label for="">Message</label>
    <input class="input" placeholder="Enter message" />
  </div>
</div>

<div class="profile-card__footer">
 
  <a href="/index.html" class="button"> 저장 </a>
  <a href="/index.html" class="button button-danger"> 쥐소 </a>
</div>
</div>
`;
