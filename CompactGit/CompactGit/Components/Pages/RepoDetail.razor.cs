using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CompactGit.Components.Pages
{
    public partial class CreateRepo : ComponentBase
    {
        private string RepositoryName { get; set; }
        private string RepositoryDescription { get; set; }
        private bool AddReadme { get; set; } = true;
        private bool ChooseGitignore { get; set; } = true;

        [Inject]
        private NavigationManager NavigationManager { get; set; }

        [Inject]
        private IDbContextFactory<GitDb.GitDbContext> DbContextFactory { get; set; }

        private async Task CreateRepository()
        {
            string repoName = RepositoryName;
            string repoDescription = RepositoryDescription;

            bool addReadme = AddReadme;
            bool chooseGitignore = ChooseGitignore;

            using (var context = DbContextFactory.CreateDbContext())
            {
                context.Repositories.Add(new GitDb.Repository
                {
                    Name = repoName,
                    Description = repoDescription
                });

                await context.SaveChangesAsync();
            }

            NavigationManager.NavigateTo("/repo-detail");
        }
    }
}