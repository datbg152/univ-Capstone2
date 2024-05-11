using CompactGit.Utils;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.JSInterop;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace CompactGit.Components.Pages
{
    public partial class MyRepo : ComponentBase
    {
        public string FindInput { get; set; } = "";
        public GitDb.GitDbContext? Context { get; set; }
        private string selectedVisibility = "All";

        private List<Repository> FilteredRepositories()
        {
            // 리포지토리 목록을 가져오는 로직을 작성합니다.
            // 예를 들어, DbContextFactory를 사용하여 DB에서 리포지토리 목록을 가져올 수 있습니다.
            // 가져온 목록을 사용자가 선택한 Visibility에 따라 필터링하여 반환합니다.
            // 여기서는 임시로 빈 목록을 반환합니다.
            return new List<Repository>();
        }

        [Parameter]
        public string UserUrl { get; set; } = default!;

        [Inject]
        private NavigationManager NavigationManager { get; set; }

        [Inject]
        private IDbContextFactory<GitDb.GitDbContext> DbContextFactory { get; set; }

        [Inject]
        public ICookie Cookie { get; set; } = default!;

        [Inject]
        private IJSRuntime JSRuntime { get; set; }

        private async Task NewButtonClickAsync()
        {
            NavigationManager.NavigateTo("/create-repo");
        }

        private async Task TypeButtonClickAsync()
        {
            await JSRuntime.InvokeVoidAsync("showVisibilityDropdown");
        }

        private async Task OnVisibilitySelect(string visibility)
        {
            selectedVisibility = visibility;
            // 선택된 Visibility에 따라 리포지토리를 정렬합니다.
            StateHasChanged();
        }

        private List<Repository> GetSortedRepositories()
        {
            var repositories = FilteredRepositories();
            if (selectedVisibility == "Public")
            {
                repositories = repositories.Where(repo => repo.IsPublic).ToList();
            }
            else if (selectedVisibility == "Private")
            {
                repositories = repositories.Where(repo => !repo.IsPublic).ToList();
            }
            return repositories.OrderBy(repo => repo.Name).ToList();
        }

        private async Task SettingsButtonClickAsync(MouseEventArgs e)
        {
            NavigationManager.NavigateTo("/settings/" + UserUrl);
        }

        private async Task ColumnButtonClickAsync(MouseEventArgs e)
        {
            foreach (var repository in Repositories)
            {
                if (repository.Id == selectedRepoId)
                {
                    repository.IsFavorite = !repository.IsFavorite;
                    break;
                }
            }

            // 화면을 다시 그립니다.
            StateHasChanged();
        }

        private async Task RepositoryClickAsync()
        {
            NavigationManager.NavigateTo("/repo-detail");
        }
    }
}