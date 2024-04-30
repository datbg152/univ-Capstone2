using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace CompactGit.Components.Pages
{
    public partial class SignUp : ComponentBase, IDisposable
    {
        public string Id { get; set; } = "";
        public string Passwd { get; set; } = "";
        public string PasswdRe { get; set; } = "";
        public string Nickname { get; set; } = "";
        public string Email { get; set; } = "";
        public string ErrorMsg { get; set; } = "";
        public GitDb.GitdbContext? Context { get; set; }

        [Inject]
        public IDbContextFactory<GitDb.GitdbContext> DbFactory { get; set; } = default!;

        [Inject]
        public NavigationManager NavigationManager { get; set; } = default!;

        protected override async Task OnInitializedAsync()
        {
            Context = DbFactory.CreateDbContext();

            await base.OnInitializedAsync();
        }

        private string PassHashing(string pass)
        {
            return Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(pass)));
        }

        private async void SignUpButtonClick(MouseEventArgs e)
        {
            if (Passwd != PasswdRe || Id == "" || Passwd == "" || Nickname == "" || Email == "")
            {
                ErrorMsg = "There are space that's not filled in";
                return;
            }

            await Context!.Users.LoadAsync();

            Context!.Users.Add(new GitDb.User()
            {
                Id = Id,
                Pw = PassHashing(Passwd),
                Nickname = Nickname,
                Email = Email,
            });

            Context!.SaveChanges();

            NavigationManager.NavigateTo("/");
        }

        void IDisposable.Dispose()
        {
            Context?.Dispose();
        }
    }
}