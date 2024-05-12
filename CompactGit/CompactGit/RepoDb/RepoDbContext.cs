using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CompactGit.RepoDb;

public partial class RepoDbContext : DbContext
{
    public RepoDbContext()
    {
    }

    public RepoDbContext(DbContextOptions<RepoDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Repo> Repos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySQL("server=localhost;database=repo_db;uid=root;pwd=1479");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Repo>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.RepoName }).HasName("PRIMARY");

            entity.ToTable("repo");

            entity.Property(e => e.UserId)
                .HasMaxLength(100)
                .HasColumnName("user_id");
            entity.Property(e => e.RepoName)
                .HasMaxLength(20)
                .HasColumnName("repo_name");
            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .HasColumnName("description");
            entity.Property(e => e.IsPublic)
                .HasColumnName("is_public");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
