using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CompactGit.GitDb;

public partial class GitDbContext : DbContext
{
    public GitDbContext()
    {
    }

    public GitDbContext(DbContextOptions<GitDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;database=gitdb;uid=root;pwd=1479");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user");

            entity.Property(e => e.Id)
                .HasMaxLength(100)
                .HasColumnName("id");
            entity.Property(e => e.Nickname)
                .HasMaxLength(20)
                .HasColumnName("nickname");
            entity.Property(e => e.Pw)
                .HasMaxLength(100)
                .HasColumnName("pw");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .HasColumnName("email");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
