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
        public string UserName { get; set; } = "";
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

        private string PassHasing(string pass)
        {
            return Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(pass)));
        }

        private async void LoginButtonClick(MouseEventArgs e)
        {
            await Context!.Users.LoadAsync();

            GitDb.User? user = Context!.Users.Where(x => x.Id == Id && x.Pw == PassHasing(Passwd)).FirstOrDefault();

            if (user != null)
            {
                UserName = user.Nickname;
                NavigationManager.NavigateTo("/" + UserName);
            }
            else
            {
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