using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace CompactGit.Components.Pages
{
    public partial class Login : ComponentBase, IDisposable
    {
        public string Id { get; set; } = "";
        public string Passwd { get; set; } = "";
        public string UserUrl { get; set; } = "";
        public string ErrorMsg { get; set; } = "";
        public GitDb.GitDbContext? Context { get; set; }

        [Inject]
        public IDbContextFactory<GitDb.GitDbContext> DbFactory { get; set; } = default!;

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

        private async void LoginButtonClick(MouseEventArgs e)
        {
            if (Id == "" || Passwd == "")
            {
                ErrorMsg = "ID or Password is empty";
                return;
            }

            await Context!.Users.LoadAsync();

            GitDb.User? user = Context!.Users.Where(x => x.Id == Id && x.Pw == PassHashing(Passwd)).FirstOrDefault();

            if (user != null)
            {
                UserUrl = user.Id;
                NavigationManager.NavigateTo("/" + UserUrl);
            }
            else
            {
                ErrorMsg = "Invalid ID or Password";
                return;
            }
        }

        private void SignUpButtonClick(MouseEventArgs e)
        {
            NavigationManager.NavigateTo("/sign-up");
        }

        void IDisposable.Dispose()
        {
            Context?.Dispose();
        }
    }
}